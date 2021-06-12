import React from "react";
import { Bar } from "react-chartjs-2";

export default function Statistic() {
  return (
    <div>
      <Bar
        data={{
          labels: ["1 Jan", "2 Jan", "3 Jan", "4 Jan", "5 Jan", "6 Jan"],
        }}
        height={200}
        width={400}
        options={{
          maintainAspectRaatio: false,
        }}
      />
    </div>
  );
}
