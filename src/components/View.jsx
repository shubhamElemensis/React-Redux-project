import React from "react";
import { useSelector } from "react-redux";

export default function View() {
  const res = useSelector((state) => state.posts);
  console.log(res);
  return (
    <div>
      <h1 className="text-3xl text-center font-bold">Post</h1>
      <div className="w-screen flex justify-center">
        <div className="flex justify-center items-center bg-slate-200 rounded-2xl w-96 h-52 text-center m-4">
          {res.map((val, index) => {
            return (
              <div className="flex flex-col" key={index}>
                <h1 className="text-2xl  font-semibold m-2  ">{val.postTitle}</h1>
                <h2 className="text-blue-600 font-semibold">{val.auhtor}</h2>
                <p className="text-justify m-3">
                {val.content}
                </p>
              </div>
            );
          })}
          <ul>
            <li></li>
          </ul>
        </div>
      </div>
    </div>
  );
}
