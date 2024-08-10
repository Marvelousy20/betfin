import Stone3 from "@/src/assets/stone3.svg";
import GrayUser from "@/src/assets/grayUser.svg";
import Betfin from "@/src/assets/betfin.svg";
import Affliate from "@/src/assets/affiliate.png";
import Leadershipboard from "./LeadershipBoard";

const players = [
  { position: 1, name: "Niiiga_777", toBeWon: 250, bonus: 20 },
  { position: 2, name: "Niiiga_777", toBeWon: 250, bonus: 20 },
  { position: 3, name: "Niiiga_777", toBeWon: 250, bonus: 20 },
  { position: 4, name: "Niiiga_777", toBeWon: 250, bonus: 20 },
  { position: 5, name: "Niiiga_777", toBeWon: 250, bonus: 20 },
];

export default function GameDetails() {
  return (
    <div className="flex justify-between gap-12 mt-10">
      <div className="border border-[#FFB626] rounded-[10px] flex px-5 py-5 w-[40%] justify-center">
        <div className="flex flex-col justify-center items-center">
          <img src={Stone3} alt="stone3" className="w-[51px] h-[60px]" />
          <p className="text-yellow font-bold text-[0.75rem] mt-3">
            35k Total bets
          </p>
          <p className="flex items-center gap-1 text-[#6A6F84] text-[0.75rem] font-bold mt-1.5">
            1k users
            <span>
              <img
                src={GrayUser}
                alt="grayUser"
                className="w-[13px] h-[13px]"
              />
            </span>
          </p>
          <p className="text-2xl font-bold mt-4">WIN!</p>
          <div className="flex gap-1 items-center text-yellow font-bold text-xl mt-4">
            <span>200,000</span>
            <img src={Betfin} alt="betfin" className="w-[20px] h-[20px]" />
          </div>
          <p className="text-bluish font-semibold">23,050 BONUS</p>
        </div>

        <div>
          <img src={Affliate} alt="affiliate" className="w-[133px] h-[233px]" />
        </div>
      </div>
      <div className="w-[60%]">
        <Leadershipboard players={players} />
      </div>
    </div>
  );
}
