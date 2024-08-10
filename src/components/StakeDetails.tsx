import Betfin from "@/src/assets/betfin.svg";
import User from "@/src/assets/userS.svg";
import Last from "@/src/assets/56.svg";

export default function StakeDetails() {
  return (
    <div>
      <div className="bg-[#131624] p-2.5 text-[0.75rem] rounded-[10px]">
        <div className="bg-[#0F121D] flex justify-between py-2.5 px-3 rounded-[7px]">
          <div className="flex items-center gap-1">
            <span className="text-yellow font-bold">35,5k</span>
            <span>
              <img src={Betfin} alt="betfine" />
            </span>
          </div>

          <div className="flex items-center gap-1">
            <span className="text-[#27AE60] font-bold">1k</span>
            <span>
              <img src={User} alt="betfine" />
            </span>
          </div>

          <div className="flex items-center gap-1">
            <span className="text-bluish font-bold">35,5k</span>
            <span>
              <img src={Last} alt="betfine" />
            </span>
          </div>
        </div>

        <div className="font-[0.75rem] flex justify-between gap-2.5 mt-2">
          <div className="bg-[#0F121D] w-full flex flex-col items-center py-2 rounded-[7px]">
            <h1 className="text-[#6A6F84] font-light">Your BET</h1>
            <span className="text-yellow font-bold">35,5k</span>
          </div>

          <div className="bg-[#0F121D] w-full flex flex-col items-center py-2 rounded-[7px]">
            <h1 className="text-[#6A6F84] font-light">Potential win</h1>
            <span className="text-[#6674ED] font-bold">12,8k(3,96x)</span>
          </div>
        </div>
      </div>
    </div>
  );
}
