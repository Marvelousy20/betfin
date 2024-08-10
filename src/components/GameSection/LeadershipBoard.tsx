import React from "react";
import BlueBetfin from "@/src/assets/blueBetfin.svg";
import YellowBetfin from "@/src/assets/betfin.svg";
import YellowTrophy from "@/src/assets/yellow_trophy.svg";
import SilverTrophy from "@/src/assets/silver_trophy.svg";
import GoldenTrophy from "@/src/assets/golden_trophy.svg";
import Fox from "@/src/assets/fox.svg";

interface Player {
  position: number;
  name: string;
  toBeWon: number;
  bonus: number;
}

interface LeaderboardProps {
  players: Player[];
}

const Leaderboard: React.FC<LeaderboardProps> = ({ players }) => {
  return (
    <div className="w-full max-w-2xl mx-auto rounded-lg overflow-hidden p-4">
      <div className="grid grid-cols-4 gap-4 mb-2 text-[0.75rem] text-[#6A6F84] font-semibold">
        <div className="pl-6">N°</div>
        <div>Players</div>
        <div>To be won</div>
        <div>Bonus</div>
      </div>
      {players.map((player, index) => (
        <div
          key={index}
          className={`
              grid grid-cols-4 gap-4 items-center py-3
              mb-2 rounded-[10px] overflow-hidden text-[0.75rem]
              ${index === 0 ? "bg-gradient-to-r from-[#FFC8001A] to-transparent gradient-border gold-border" : ""}
              ${index === 1 ? "gradient-border silver-border" : ""}
              ${index === 2 ? "bg-gradient-to-r from-[#131624] to-transparent gradient-border bronze-border" : ""}
              ${index === 4 ? "bg-gradient-to-r from-[#131624] to-transparent" : ""}
            `}
        >
          <div className="flex items-center text-white pl-4">
            #{player.position}
            {index < 3 && (
              <span className="ml-2">
                {index === 0 && (
                  <img src={YellowTrophy} alt="yellow" className="h-4" />
                )}
                {index === 1 && (
                  <img src={SilverTrophy} alt="silver" className="h-4" />
                )}
                {index === 2 && (
                  <img src={GoldenTrophy} alt="golden" className="h-4" />
                )}
              </span>
            )}
          </div>
          <div className="flex items-center">
            <span className="mr-2">
              <img src={Fox} alt="fox" />
            </span>
            <span className="text-white font-semibold">{player.name}</span>
          </div>
          <div className="text-yellow font-semibold flex items-center gap-1">
            {player.toBeWon}k{" "}
            <img src={YellowBetfin} alt="betfin" className="h-4" />
          </div>
          <div className="text-bluish font-semibold flex items-center gap-1">
            {player.bonus}k
            <img src={BlueBetfin} alt="betfin" className="h-4" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Leaderboard;
