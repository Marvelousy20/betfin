import Stone1 from "@/src/assets/stone1.svg";
import Stone2 from "@/src/assets/stone2.svg";
import Stone3 from "@/src/assets/stone3.svg";
import Stone4 from "@/src/assets/stone4.svg";
import Stone5 from "@/src/assets/stone5.svg";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "betfinio_app/tabs";
import Players from "./Players";
import Bonuses from "./Bonuses";
import Bets from "./Bets";
import StakeDetails from "../StakeDetails";
import { useStone } from "@/src/context/stoneContext";

export default function Sidebar() {
  const { selectedStone } = useStone();

  return (
    <div className="">
      <div className="bg-[#131624] py-5 px-2.5 rounded-[10px] h-[650px]">
        <div className="flex justify-between">
          <div
            className={`${selectedStone?.id === 1 ? "border border-yellow rounded-[5px] px-2" : ""}`}
          >
            <img src={Stone1} alt="stone1" className={`w-[14px] h-[16px]`} />
          </div>

          <div
            className={`${selectedStone?.id === 2 ? "border border-yellow rounded-[5px] px-2" : ""}`}
          >
            <img src={Stone2} alt="stone2" className={`w-[14px] h-[16px]`} />
          </div>

          <div
            className={`${selectedStone?.id === 3 ? "border border-yellow rounded-[5px] px-2" : ""}`}
          >
            <img src={Stone3} alt="stone3" className={`w-[14px] h-[16px]`} />
          </div>

          <div
            className={`${selectedStone?.id === 4 ? "border border-yellow rounded-[5px] px-2" : ""}`}
          >
            <img src={Stone4} alt="stone4" className={`w-[14px] h-[16px]`} />
          </div>

          <div
            className={`${selectedStone?.id === 5 ? "border border-yellow rounded-[5px] px-2" : ""}`}
          >
            <img src={Stone5} alt="stone5" className={`w-[14px] h-[16px]`} />
          </div>
        </div>

        <div className="mt-5 w-full">
          <Tabs defaultValue="players">
            <TabsList className="text-[0.75rem] w-full gap-6">
              <TabsTrigger
                value="players"
                className="data-[state=active]:bg-yellow data-[state=active]:text-black text-[0.75rem] border-none bg-[#0F121D] text-[#6A6F84]"
              >
                Players
              </TabsTrigger>
              <TabsTrigger
                value="bonuses"
                className="data-[state=active]:bg-yellow data-[state=active]:text-black text-[0.75rem] border-none bg-[#0F121D] text-[#6A6F84]"
              >
                Bonuses
              </TabsTrigger>
              <TabsTrigger
                value="bets"
                className="data-[state=active]:bg-yellow data-[state=active]:text-black text-[0.75rem] border-none bg-[#0F121D] text-[#6A6F84]"
              >
                Bets
              </TabsTrigger>
            </TabsList>

            <TabsContent value="players">
              <Players />
            </TabsContent>
            <TabsContent value="bonuses">
              <Bonuses />
            </TabsContent>
            <TabsContent value="bets">
              <Bets />
            </TabsContent>
          </Tabs>
        </div>
      </div>
      <div className="mt-2.5">
        <StakeDetails />
      </div>
    </div>
  );
}
