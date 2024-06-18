import axios from 'axios';
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import { CiSearch } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";

const Header = ({data,setData,loading,setLoading,fetchData}) => {
    const[search,setSearch]=useState(false);
    const[input,setInput]=useState('');
    const url=`${process.env.REACT_APP_BACKEND_URL}searchItems`;
    const handleSearch=async()=>{
        if(input!=''){
            setLoading(true);
            try{            
            const response=await axios.post(
                url,
                {input},
                { 
                headers: {
                    'Content-Type': 'application/json',
                },
            });
            setData(response?.data?.data);
            setLoading(false);
            }catch(err){
                toast.error(err?.data?.message)
            }
        }
    }
    const changeHandler=async(e)=>{
        const newValue = e.target.value;
    
    if (newValue === '') {
        await fetchData();
    }else{
        setInput(e.target.value);
        
    }
    }
    useEffect(()=>{handleSearch()},[input]);
  return (
    <div className=' fixed top-0  w-screen py-4 flex justify-between items-center px-2 sm:px-7 bg-slate-700 z-10 rounded-b-md'>
        <h1 className=' text-white font-bold text text-2xl'>ShopSmart</h1>
        <div className=' flex gap-4 items-center justify-center'>
        {
            search&&(
                <div className='relative flex  items-center justify-center'>
                <input type="text" className=' w-28 input sm:w-40  md:w-60 h-7 pl-2 text-sm outline-none rounded' onChange={changeHandler}/>
                <IoMdClose className=' font-bold text-lg text-red-400 absolute right-2 cursor-pointer' onClick={()=>{setSearch(false); fetchData()}}/>

                </div>
            )
        }
        <CiSearch  className=' text-white text-2xl hover:opacity-30 cursor-pointer' onClick={()=>{setSearch(true)}}/>
        </div>
    </div>
  )
}

export default Header
