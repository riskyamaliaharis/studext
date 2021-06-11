import React from "react";

export default function Story() {
  return (
    // <div className="grid grid-cols-3 grid-rows-4  grid-flow-col gap-4 ">
    //   <div className="col-span-2 bg-gray-300">1</div>
    //   <div className="row-span-2 col-span-2 bg-yellow-300">2</div>
    //   <div className="row-span-3 bg-pink-300">3</div>
    //   <div className="col-start-1 col-end-4 bg-red-500 ">4</div>
    // </div>
    <div>
      <div className="grid grid-rows-3  grid-flow-col gap-4 ">
        <div className="col-span-2 bg-gray-300">1</div>
        <div className="row-span-2 col-span-2 bg-yellow-300">2</div>
        <div className="row-span-3 bg-pink-300">3</div>
      </div>
      <div className="grid grid-col-3 mt-4 ">
        <div className="col-start-1 col-end-4 bg-red-500 ">4</div>
      </div>
    </div>
  );
}
