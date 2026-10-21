"use client";

import { useState } from "react";

export default function ProfitCalculator() {
  const [profit, setProfit] = useState(0);

  function sellPhone() {
    setProfit((currentProfit) => currentProfit + 1000);
  }

  function buyPhone() {
    setProfit((currentProfit) => currentProfit - 800);
  }

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="flex gap-4">
        <button
          onClick={sellPhone}
          className="rounded bg-blue-800 px-4 py-2 text-white hover:bg-blue-500"
        >
          Sell iPhone
        </button>

        <button
          onClick={buyPhone}
          className="rounded bg-blue-800 px-4 py-2 text-white hover:bg-blue-500"
        >
          Buy iPhone
        </button>
      </div>

      <p className="text-xl font-bold">Profit: ${profit.toFixed(2)}</p>
    </div>
  );
}
