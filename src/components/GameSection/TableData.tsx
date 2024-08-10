import React from "react";
import Betfin from "@/src/assets/betfin.svg";
import BlueBetfin from "@/src/assets/blueBetfin.svg";

interface TableData {
  date: string;
  roundN: string;
  sum: number;
  stone: React.ReactNode;
  winning: number | null;
  bonus: number | null;
  id: string;
}

interface TableProps {
  data: TableData[];
}

const Table: React.FC<TableProps> = ({ data }) => {
  return (
    <table className="w-full text-sm text-center">
      <thead className="text-xs text-[#6A6F84] font-semibold h-[40px]">
        <tr>
          <th scope="col" className="">
            Date
          </th>
          <th scope="col" className="">
            Round N°
          </th>
          <th scope="col" className="">
            Sum
          </th>
          <th scope="col" className="">
            Stone
          </th>
          <th scope="col" className=" text-yellow">
            Winning
          </th>
          <th scope="col" className="">
            Bonus
          </th>
          <th scope="col" className="">
            ID of transaction
          </th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr
            key={index}
            className={`text-[0.75rem] font-medium h-[40px] ${index % 2 === 0 ? "bg-[#131624]" : ""}`}
          >
            <td className=" rounded-l-[10px]">{item.date}</td>
            <td className="underline px-6">{item.roundN}</td>
            <td className="">
              <span className="flex justify-center items-center gap-1">
                {item.sum} <img src={Betfin} className="h-[16px] w-[16px]" />
              </span>
            </td>

            <td className="">
              <span className="flex justify-center items-center">
                {item.stone}
              </span>
            </td>

            {item.winning !== null ? (
              <td className="">
                <span className="flex justify-center items-center gap-1">
                  {item.winning} <img src={BlueBetfin} alt="betfin" />
                </span>
              </td>
            ) : (
              <td className="text-bluish">-</td>
            )}

            {item.bonus !== null ? (
              <td className="">
                <span className="text-bluish flex gap-1 justify-center items-center">
                  {item.bonus} <img src={BlueBetfin} alt="betfin" />
                </span>
              </td>
            ) : (
              <td className="text-bluish px-8">-</td>
            )}

            <td className="rounded-r-[10px]">{item.id}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
