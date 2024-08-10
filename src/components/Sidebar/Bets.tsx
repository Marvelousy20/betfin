import Fox from "@/src/assets/fox.svg";
import Betfin from "@/src/assets/betfin.svg";
import BlueBetfin from "@/src/assets/blueBetfin.svg";
import Stone4 from "@/src/assets/stone4.svg";

export default function Bets() {
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
            </div>

            <h1 className="text-[#6A6F84] text-[0.75rem] font-light">
              23e4...661a
            </h1>
          </div>

          <div className="flex flex-col gap-y-2">
            <div className="flex items-center gap-1">
              <span className="text-yellow text-[0.75rem]">200</span>
              <span>
                <img src={Betfin} />
              </span>
            </div>

            <div className="flex justify-end gap-1">
              <span>
                <img src={Stone4} alt="stone4" className="w-[18px] h-[22px]" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
