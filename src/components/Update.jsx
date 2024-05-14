// import React from "react";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { updatePost } from "../Redux/slice";

export default function Update() {
  const dispatch = useDispatch();
  const res = useSelector((state) => state.updateSlice);
  const updatedIndex = res.map((val) => val.index);
  const posts = useSelector((state) => state.postSlice.posts);
  const data = posts[updatedIndex];
  const [book, setbook] = useState({});
  // useEffect(() => {
  //   setbook({
  //     postTitle: data.postTitle,
  //     auhtor: data.auhtor,
  //     content: data.content,
  //   });
  // }, []);
  const handleChange = (e) => {
    setbook({ ...book, [e.target.name]: e.target.value });
    console.log(book);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updatePost(book));
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
              defaultValue={data.postTitle}
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
              defaultValue={data.auhtor}
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
              defaultValue={data.content}
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
