import React from "react";

export default function Navabar() {
  return (
    <>
      <div className="p-6 bg-blue-200">
        <nav className="flex justify-between">
          <p className="first-letter:text-[red] text-[20px] font-bold ">
            Rahul <span className="text-[red]">Y</span>adav{" "}
          </p>

          <ol className="flex justify-between px-1 text-[red] md:text-[20px]">
            <li className="mx-4 hover:bg-red-600 hover:text-white cursor-pointer">Home </li>
            <li className="mx-4 hover:bg-red-600 hover:text-white cursor-pointer">About</li>
            <li className="mx-4 hover:bg-red-600 hover:text-white rounded cursor-pointer">Contact </li>
          </ol>
        </nav>
      </div>
    </>
  );
}
