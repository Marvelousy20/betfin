import React, { useState, useEffect } from "react";
import Betfin from "@/src/assets/betfin.svg";

interface BetAmountProps {
  maxAmount: number;
}

const BetAmount: React.FC<BetAmountProps> = ({ maxAmount }) => {
  const [amount, setAmount] = useState<number>(0);
  const [percentage, setPercentage] = useState<number>(0);

  useEffect(() => {
    setPercentage((amount / maxAmount) * 100);
  }, [amount, maxAmount]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newAmount = parseFloat(e.target.value);
    setAmount(isNaN(newAmount) ? 0 : Math.min(newAmount, maxAmount));
  };

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPercentage = parseFloat(e.target.value);
    setAmount((newPercentage / 100) * maxAmount);
  };

  return (
    <div className="w-full">
      <div className="relative mb-2">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <img src={Betfin} alt="betfin" className="w-[20px] h-[20px]" />
        </div>
        <input
          type="number"
          value={amount.toFixed(5)}
          onChange={handleInputChange}
          className="pl-10 pr-4 py-2  text-white bg-transparent rounded-[5px] border border-[#6A6F84] h-[40px]  w-full px-8 focus:outline-none focus:ring-2 focus:ring-yellow-500"
        />
      </div>
      <div className="relative">
        <input
          type="range"
          min="0"
          max="100"
          value={percentage}
          onChange={handleSliderChange}
          className="w-full h-[2px] bg-[#131624] rounded-lg appearance-none cursor-pointer custom-slider"
        />
        <div
          style={{ width: `${percentage}%` }}
          className="absolute h-[2px] bg-yellow rounded-lg top-[15px]"
        ></div>
        <div
          className="absolute top-3 -translate-x-1/2 mt-4"
          style={{ left: `${percentage}%` }}
        >
          <span className="text-yellow text-sm font-semibold">
            {percentage.toFixed(0)}%
          </span>
        </div>
      </div>
      <div className="flex justify-between mt-2 text-[#6A6F84]">
        <span className="text-[0.70rem]">0%</span>

        <span className="text-[0.70rem]">100%</span>
      </div>
    </div>
  );
};

export default BetAmount;
