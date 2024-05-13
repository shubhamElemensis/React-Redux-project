import React from 'react'

export default function Add() {
  return (
    <div>
    <div className="">
      <h1 className="text-3xl text-center m-7 font-semibold">Add New Post</h1>
      <form action="" className="text-center ">
        <div className=" flex justify-center gap-3 items-center">
        <h2 className="text-xl">Post Title :</h2>
          <input type="text" placeholder="Text" className="p-3  border-b  outline-none"/>
        </div>
        <div className=" flex justify-center gap-3 items-center">
        <h2 className="text-xl">Author  :</h2>
          <input type="text" placeholder="Text" className="p-3  border-b  outline-none"/>
        </div>
        <div className=" flex flex-col justify-center gap-3 items-center m-3 ">
        <h2 className="text-xl">Content  :</h2>
          <textarea name="" id="" className="w-96 h-44 resize-none outline-none border-2 p-2"></textarea>
        </div>
        <button type="submit" className="m-3 px-4 py-3 bg-blue-500 text-white rounded hover:opacity-80"> Add</button>
      </form>
    </div>
  </div>
  )
}
