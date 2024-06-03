"use client"
import { useState } from "react";

export default function Home() {
  const [val,setValue]=useState("")
  const [list,setList]=useState([])
  const add=()=>{
    if(!val){
      alert("Enter some text..")
    }
    else{
      setList([...list,val])
      setValue("")
    }
  }
  const changeval=(e)=>{
    setValue(e.target.value)
  }
  const del=(id)=>{
    const data=list.filter((item,i)=>id!==i)
    setList(data)
  }
  return (
    <>
    <h1 className=' text-red-600  text-[4rem] mb-5 text-center mt-2'>Welcome to todo-list....</h1>
    <div className=' flex border-red-600 border-[1px] w-1/3 rounded-full overflow-hidden m-auto'>
      <input type="text" placeholder="Enter text.." className='px-2 outline-none flex-1' value={val} onChange={changeval}/>
      <button className='flex-2 bg-red-600 rounded-full px-10 py-2' onClick={add}>ADD</button>
      
    </div>
    <div className='m-auto w-1/3 mt-5 space-y-3'>{
        list.map((item,i)=>{
          return <div key={i} className='flex justify-between border-[1px] border-red-600 py-2 px-3 rounded-md'>
            <p className=' break-words w-[90%] '>{item}</p>
            <button onClick={()=>del(i)} className='flex-2'>X</button>
          </div>
        })
      }</div>
    </>
  );
}
