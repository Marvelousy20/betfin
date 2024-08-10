import React from "react";
import Betfin from "@/src/assets/betfin.svg";
import BlueBetfin from "@/src/assets/blueBetfin.svg";

interface TableData {
  roundTime: string;
  roundId: string;
  usersCount: number;
  betsCount: number;
  betSum: number | null;
  //   winningStone: React.ReactNode;
  winningStone: string;
  paidToStaking: string;
}

interface TableProps {
  data: TableData[];
}

const AllRoundsTable: React.FC<TableProps> = ({ data }) => {
  return (
    <table className="w-full text-sm text-center">
      <thead className="text-xs text-[#6A6F84] font-semibold h-[40px]">
        <tr>
          <th scope="col" className="">
            Round time
          </th>
          <th scope="col" className="">
            ID of the round
          </th>
          <th scope="col" className="">
            Users count
          </th>
          <th scope="col" className="">
            Bets count
          </th>
          <th scope="col" className=" text-yellow">
            Sum of bets
          </th>
          <th scope="col" className="">
            Winning stone
          </th>
          <th scope="col" className="">
            Paid to staking
          </th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr
            key={index}
            className={`text-[0.75rem] text-center font-medium h-[40px] ${index % 2 === 0 ? "bg-[#131624]" : ""}`}
          >
            <td className="px-4 rounded-l-[10px]">{item.roundTime}</td>
            <td className="underline">{item.roundId}</td>
            <td className="">{item.usersCount}</td>
            <td className="">{item.betsCount}</td>

            <td className="">
              <span className="flex items-center justify-center gap-1 text-yellow font-semibold">
                {item.betSum} <img src={Betfin} alt="betfin" />
              </span>
            </td>

            <td className="">
              <span className="flex justify-center items-center">
                <img
                  src={item.winningStone}
                  alt="betfin"
                  className="w-[21px] h-[25px]"
                />
              </span>
            </td>

            <td className="rounded-r-[10px]">
              <span className="flex h-full justify-center items-center gap-1 text-yellow underline font-semibold">
                {item.paidToStaking} <img src={Betfin} alt="betfin" />
              </span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default AllRoundsTable;
