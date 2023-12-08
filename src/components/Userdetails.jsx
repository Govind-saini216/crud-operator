import React from 'react'
import Delates from './Delates'
import {IoTrashOutline} from "react-icons/io5";
import {fakedatauser} from '../api/index';
import { useDispatch, useSelector } from 'react-redux';
import { addUser,removeUser } from './store/Slice/Userslice';

export default function Userdetails() {

  const data = useSelector((state)=>{
    return state.users
  })

  const dispatch = useDispatch();

  const delatebtn = (id) => {
    dispatch(removeUser(id))
    console.log(id)
  }

  const addData = (e) =>{
    dispatch(addUser(e))
    
  }

  return (
    <div>
        <div className='flex items-center justify-between' >
        <h3 className='border rounded-lg bg-gradient-to-tr to-violet-700 from-blue-900 text-white font-bold text-lg p-2 px-4 w-[15rem]' >List of user Details</h3>
        <button onClick={()=> addData(fakedatauser())}  className='border active:scale-95 active:to-amber-500 active:from-blue-700 rounded-lg bg-gradient-to-tr to-amber-700 from-blue-900 text-white font-bold text-lg p-2 px-4'>
        Add new user
     </button>
        </div>

        <div className='text-left py-2 pt-10'>
        { data.map((d,id)=>{
           return <div key={id} className='flex  items-center justify-between space-y-5 border-t pb-3 w-full'>
                    <p>{d}</p>
                    <p onClick={()=>delatebtn(id)}  className='text-red-800 font-extrabold text-3xl cursor-pointer active:scale-90'><IoTrashOutline/></p>
          </div>
        })}
        </div>
        <hr></hr>
        <Delates/>
    </div>
  )
}
