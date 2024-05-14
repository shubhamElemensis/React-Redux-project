// import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deletePost } from "../Redux/slice";

export default function View() {
  const res = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  const handleDelete = (index) => {
    // console.log(index);
    dispatch(deletePost(index));
  };

  const handleUpdate = (index) => {
    console.log(index);
  };

  return (
    <div>
      <h1 className="text-3xl text-center font-bold">Post</h1>
      <div className="w-screen flex justify-center">
        {res.map((val, index) => {
          return (
            <div
              className="flex justify-center items-center bg-slate-200 rounded-2xl w-96 h-52 text-center m-4"
              key={index}
            >
              <div className="flex flex-col">
                <h1 className="text-2xl  font-semibold m-2  ">
                  {val.postTitle}
                </h1>
                <h2 className="text-blue-600 font-semibold">{val.auhtor}</h2>
                <p className="text-justify m-3">{val.content}</p>
                <div className="flex gap-5 justify-center">
                  <button
                    className="px-3 py-2 bg-green-500 text-white rounded-lg"
                    onClick={() => handleUpdate(index)}
                  >
                    update
                  </button>
                  <button
                    className="px-3 py-2 bg-red-500 text-white rounded-lg"
                    onClick={() => handleDelete(index)}
                  >
                    delete
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
