import React from 'react';
import {clearAll} from './store/Slice/Userslice';
import { useDispatch } from 'react-redux';


export default function Deletes(){
  const dispatch = useDispatch();

  function deletee(){
          console.log("abhi");
          dispatch(clearAll())
  }

  return (
    <div className='flex justify-end pt-5'>
     <button onClick={deletee}  className='border active:to-amber-500 active:scale-95 active:from-blue-700 rounded-lg bg-gradient-to-tr to-amber-700 from-blue-900 text-white font-bold text-lg p-2 px-4'>
        Clear All
     </button>
    </div>
  )}
