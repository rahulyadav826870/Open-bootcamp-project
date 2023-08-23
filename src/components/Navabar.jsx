import React from "react";

export default function Navabar() {
  return (
    <>
      <div className="p-6 bg-blue-200">
        <nav className="flex justify-between">
       <p className="first-letter:text-[red] ">Rahul Yadav</p> 

          <ol className="flex justify-between px-1 text-[red] md:text-[20px]">
            <li className="mx-4">Home </li>
            <li className="mx-4">About </li>
            <li className="mx-4">Contact </li>
          </ol>
        </nav>
      </div>
    </>
  );
}
