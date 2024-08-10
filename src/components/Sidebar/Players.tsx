import Fox from "@/src/assets/fox.svg";
import YellowTrophy from "@/src/assets/yellow_trophy.svg";
import SilverTrophy from "@/src/assets/silver_trophy.svg";
import GoldenTrophy from "@/src/assets/golden_trophy.svg";
import Betfin from "@/src/assets/betfin.svg";

export default function Players() {
  return (
    <div>
      <div className="space-y-2.5">
        <div className="border border-[#FFBB28] rounded-[10px] flex justify-between px-4 py-2.5">
          <div>
            <img src={Fox} />
          </div>

          <div className="flex flex-col gap-y-2">
            <div className="flex gap-2">
              <h1 className="text-[#6A6F84] text-[0.75rem] font-semibold">
                Niiga 777
              </h1>

              <img src={YellowTrophy} alt="yellow_trophy" />
            </div>

            <h1 className="text-[#6A6F84] text-[0.75rem] font-light">
              23e4...661a
            </h1>
          </div>

          <div className="flex flex-col items-end gap-y-2">
            <h4 className="font-light text-[0.75rem]">share: 12%</h4>
            <div className="flex gap-1 items-center">
              <h1 className="text-white text-[0.75rem]">516, 000 BET</h1>
              <img src={Betfin} alt="betfin" className="w-[12px] h-[12px]" />
            </div>
          </div>
        </div>

        <div className="border border-[#D0D2DB] rounded-[10px] flex justify-between px-4 py-2.5">
          <div>
            <img src={Fox} />
          </div>

          <div className="flex flex-col gap-y-2">
            <div className="flex gap-2">
              <h1 className="text-[#6A6F84] text-[0.75rem] font-semibold">
                Niiga 777
              </h1>

              <img src={SilverTrophy} alt="yellow_trophy" />
            </div>

            <h1 className="text-[#6A6F84] text-[0.75rem] font-light">
              23e4...661a
            </h1>
          </div>

          <div className="flex flex-col items-end gap-y-2">
            <h4 className="font-light text-[0.75rem]">share: 12%</h4>
            <div className="flex gap-1 items-center">
              <h1 className="text-white text-[0.75rem]">516, 000 BET</h1>
              <img src={Betfin} alt="betfin" className="w-[12px] h-[12px]" />
            </div>
          </div>
        </div>

        <div className="border border-[#C27238] rounded-[10px] flex justify-between px-4 py-2.5">
          <div>
            <img src={Fox} />
          </div>

          <div className="flex flex-col gap-y-2">
            <div className="flex gap-2">
              <h1 className="text-[#6A6F84] text-[0.75rem] font-semibold">
                Niiga 777
              </h1>

              <img src={GoldenTrophy} alt="yellow_trophy" />
            </div>

            <h1 className="text-[#6A6F84] text-[0.75rem] font-light">
              23e4...661a
            </h1>
          </div>

          <div className="flex flex-col items-end gap-y-2">
            <h4 className="font-light text-[0.75rem]">share: 12%</h4>
            <div className="flex gap-1 items-center">
              <h1 className="text-white text-[0.75rem]">516, 000 BET</h1>
              <img src={Betfin} alt="betfin" className="w-[12px] h-[12px]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
