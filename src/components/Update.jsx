// import React from "react";
import { useState } from "react";
// import { useDispatch } from "react-redux"

export default function Update() {
  //   const dispatch = useDispatch();
  const [book, setbook] = useState({});

  const handleChange = (e) => {
    setbook({ ...book, [e.target.name]: e.target.value });
    console.log(book);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setbook({
      postTitle: "",
      auhtor: "",
      content: "",
    });
  };
  return (
    <div>
      <div className="">
        <h1 className="text-3xl text-center m-7 font-semibold">Update Post</h1>
        <form onSubmit={handleSubmit} className="text-center ">
          <div className=" flex justify-center gap-3 items-center">
            <h2 className="text-xl">Post Title :</h2>
            <input
              type="text"
              placeholder="Text"
              name="postTitle"
              value={book.postTitle}
              className="p-3  border-b  outline-none"
              onChange={handleChange}
              required
            />
          </div>
          <div className=" flex justify-center gap-3 items-center">
            <h2 className="text-xl">Author :</h2>
            <input
              type="text"
              placeholder="Text"
              name="auhtor"
              value={book.auhtor}
              className="p-3  border-b  outline-none"
              onChange={handleChange}
              required
            />
          </div>
          <div className=" flex flex-col justify-center gap-3 items-center m-3 ">
            <h2 className="text-xl">Content :</h2>
            <textarea
              id=""
              name="content"
              value={book.content}
              className="w-96 h-44 resize-none outline-none border-2 p-2"
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="m-3 px-4 py-3 bg-blue-500 text-white rounded hover:opacity-80"
          >
            Update
          </button>
        </form>
      </div>
    </div>
  );
}
