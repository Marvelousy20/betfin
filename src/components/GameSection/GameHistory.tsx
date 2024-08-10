import { Tabs, TabsContent, TabsList, TabsTrigger } from "betfinio_app/tabs";
import {
  Select,
  SelectItem,
  SelectContent,
  SelectTrigger,
  SelectValue,
} from "betfinio_app/select";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "betfinio_app/dropdown-menu";
import { Search, Eye, ChevronDown } from "lucide-react";
import Swap from "@/src/assets/swap_vert.svg";
import Table from "./TableData";
import Stone4 from "@/src/assets/stone4.svg";
import Stone3 from "@/src/assets/stone3.svg";
import AllRoundsTable from "./AllRoundsTable";

const data = [
  {
    date: "11.01.2024",
    roundN: "#12345",
    sum: 300,
    stone: <img src={Stone4} alt="Stone" className="w-[20px] h-[25px]" />,
    winning: 250,
    bonus: 20,
    id: "23e4...661a",
  },
  {
    date: "11.01.2024",
    roundN: "#12345",
    sum: 300,
    stone: <img src={Stone3} alt="Stone" className="w-[20px] h-[25px]" />,
    winning: null,
    bonus: null,
    id: "23e4...661a",
  },
];

const allRoundData = [
  {
    roundTime: "23 min",
    roundId: "23e4...661a",
    usersCount: 4,
    betsCount: 123,
    betSum: 250,
    winningStone: Stone3,
    paidToStaking: "250",
  },
  {
    roundTime: "23 min",
    roundId: "23e4...661a",
    usersCount: 4,
    betsCount: 123,
    betSum: 250,
    winningStone: Stone3,
    paidToStaking: "250",
  },
];

export default function GameHistory() {
  return (
    <div className="mt-10">
      <Tabs defaultValue="my_bets">
        <TabsList className="gap-6 text-[0.75rem]">
          <TabsTrigger
            value="my_bets"
            className="data-[state=active]:bg-yellow data-[state=active]:text-black text-[0.75rem] border-none bg-[#131624] text-[#6A6F84]"
          >
            My bets
          </TabsTrigger>
          <TabsTrigger
            value="all_rounds"
            className="data-[state=active]:bg-yellow data-[state=active]:text-black text-[0.75rem] border-none bg-[#131624] text-[#6A6F84]"
          >
            All rounds
          </TabsTrigger>
        </TabsList>

        <div className="flex items-center justify-between">
          <h3 className="text-lg font-bold">History</h3>

          <div className="flex gap-10 items-center mt-7">
            <div>
              <DropdownMenu modal={false} className="">
                <DropdownMenuTrigger className="flex items-center">
                  <span className="text-[#6A6F84] mx-2 text-[0.75rem]">
                    Sort by:
                  </span>
                  <img src={Swap} alt="swap" />
                </DropdownMenuTrigger>
              </DropdownMenu>
            </div>

            <div className="flex items-center gap-5">
              <div className="relative h-[40px]">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search color="#6A6F84" size={20} className="mb-1" />
                </div>
                <input
                  type="text"
                  placeholder="Search bet"
                  className="pl-10 pr-4 py-2 h-full text-[0.75rem] placeholder:text-[0.75rem] text-white bg-[#131624] rounded-[5px]  w-full px-8 focus:outline-none focus:ring-2 focus:ring-yellow-500"
                />
              </div>

              <div>
                <Select modal={false} className="">
                  <SelectTrigger className="flex h-[40px] border border-[#151A2A] bg-[#131624]">
                    <Eye color="#6A6F84" size={20} />
                    <span className="text-[#6A6F84] mx-2 text-[0.75rem]">
                      Show 10
                    </span>
                  </SelectTrigger>

                  <SelectContent>
                    <SelectItem value="light">Show 10</SelectItem>
                    <SelectItem value="light">Show 20</SelectItem>
                    <SelectItem value="dark">Show 30</SelectItem>
                    <SelectItem value="system">Show 40</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </div>

        <TabsContent value="my_bets">
          <Table data={data} />
        </TabsContent>
        <TabsContent value="all_rounds">
          <AllRoundsTable data={allRoundData} />
        </TabsContent>
      </Tabs>
    </div>
  );
}
