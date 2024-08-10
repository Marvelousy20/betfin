import React, { ChangeEvent, useState } from "react";
import Stone1 from "@/src/assets/stone1.svg";
import Stone2 from "@/src/assets/stone2.svg";
import Stone3 from "@/src/assets/stone3.svg";
import Stone4 from "@/src/assets/stone4.svg";
import Stone5 from "@/src/assets/stone5.svg";
import Betfin from "@/src/assets/betfin.svg";
import Volume from "@/src/assets/volume.svg";
import User from "@/src/assets/user.svg";
import Bet from "@/src/assets/bets.svg";
import BetAmount from "./BetAmount";
import GameHistory from "./GameHistory";
import { useStone } from "@/src/context/stoneContext";
import GameDetails from "./GameDetails";
import StoneImage from "./StoneImage";

interface Stone {
  id: number;
  name: string;
  bonus?: string;
  img?: string;
  noBids?: boolean;
  coin?: string;
  users?: string;
  bets?: string;
  volume?: string;
}

const stones: Stone[] = [
  {
    id: 1,
    img: Stone1,
    name: "Stone 1",
    bonus: "23,050",
    coin: "150,016",
    users: "34.2",
    bets: "504.4",
    volume: "55.3M",
    noBids: false,
  },

  {
    id: 2,
    img: Stone2,
    name: "Stone 2",
    noBids: true,
  },

  {
    id: 3,
    img: Stone3,
    name: "Stone 3",
    bonus: "23,050",
    coin: "150,016",
    users: "34.2",
    bets: "504.4",
    volume: "55.3M",
    noBids: false,
  },

  {
    id: 4,
    img: Stone4,
    name: "Stone 4",
    bonus: "23,050",
    coin: "150,016",
    users: "34.2",
    bets: "504.4",
    volume: "55.3M",
    noBids: false,
  },

  {
    id: 5,
    img: Stone5,
    name: "Stone 5",
    bonus: "23,050",
    coin: "150,016",
    users: "34.2",
    bets: "504.4",
    volume: "55.3M",
    noBids: false,
  },
];

export default function GameSection() {
  // const [selectedStone, setSelectedStone] = useState<Stone | null>(null);
  const { selectedStone, selectStone } = useStone();
  const [betAmount, setBetAmount] = useState<number>(0);
  const maxBetAmount = 1;

  const handleStoneSelect = (stone: Stone) => {
    selectStone(stone);
  };

  const handleBetAmountChange = (e: ChangeEvent<HTMLInputElement>) => {
    setBetAmount(parseFloat(e.target.value));
  };

  return (
    <div className="mt-10">
      {/* Game Card */}
      <div className="grid grid-cols-5 gap-5">
        {stones.map((stone) => (
          <div
            key={stone.id}
            className={`rounded-[10px] flex flex-col items-center relative ${selectedStone === stone ? "enhanced-gradient" : "bg-[#131624] "}`}
            onClick={() => handleStoneSelect(stone)}
          >
            <div className="absolute -top-8">
              <div className="stone-image">
                <StoneImage src={stone.img} alt="Stone" glowColor="#2F2D64" />
              </div>
            </div>

            <div className="mt-12 mb-4">
              <div className="text-center">1x</div>
              <button
                className={`border text-[0.75rem] rounded-[5px] py-2 px-5 border-yellow ${selectedStone === stone ? "bg-yellow text-[#131624]" : "bg-[#131624] text-white"}`}
              >
                Choose
              </button>

              <div className="flex items-center justify-center gap-1.5 mt-1.5 text-[0.75rem]">
                <img src={Betfin} alt={Betfin} className="h-[15px] w-[15px]" />
                <span>{stone.coin}</span>
              </div>

              {stone.bonus && (
                <div className="text-[0.75rem] text-bluish mt-1.5">
                  {stone.bonus} BONUS
                </div>
              )}

              <div className="space-y-1.5 mt-2.5 text-center flex flex-col items-center">
                {stone.users && (
                  <div className="text-[0.6rem] flex items-center text-[#6A6F84] gap-1.5">
                    <img src={User} alt="later" /> {stone.users} users
                  </div>
                )}

                {stone.bets && (
                  <div className="text-[0.6rem] flex items-center text-[#6A6F84] gap-1.5">
                    <img src={Bet} alt="later" /> {stone.bets} bets
                  </div>
                )}

                {stone.volume && (
                  <div className="text-[0.6rem] flex items-center text-[#6A6F84] gap-1.5">
                    <img src={Volume} alt="later" /> {stone.volume} volume
                  </div>
                )}

                {stone.noBids && (
                  <div>
                    <p className="text-[0.625rem] font-medium">No bids yet?</p>
                    <p className="font-semibold text-[0.75rem]">Be the first</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="max-w-[31rem] mx-auto mt-10">
        <div className="">
          <div className="w-full">
            <label className="text-sm font-semibold">Bet amount</label>
            <div className="relative mt-2">
              <div className="flex gap-5">
                <BetAmount maxAmount={1} />

                <div className="w-full">
                  <button className="bg-yellow py-2.5 w-full h-[40px] font-semibold text-[0.75rem] rounded-[5px]">
                    Spin to win x BET + y Bonus
                  </button>
                  <div className="flex justify-around mt-2">
                    {stones.map((stone) => (
                      <div
                        key={stone.id}
                        className={`cursor-pointer px-2 py-0.5 ${selectedStone === stone ? "border border-yellow rounded-[5px]" : ""}`}
                      >
                        <img
                          src={stone.img}
                          className={`w-[14px] h-[14px]`}
                          onClick={() => handleStoneSelect(stone)}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Game Details */}
      {/* <GameDetails /> */}

      {/* Game History */}
      <GameHistory />
    </div>
  );
}
