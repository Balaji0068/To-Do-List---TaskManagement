import React, { useEffect } from 'react'
import { useContext } from 'react';
import { useState } from 'react';
import AllTask from './all-task';
import { TodoContext } from '.';
export default function FilterTask() {
    const {list} =useContext(TodoContext);
    const [select,setSelect]=useState(false);
    const [filtered,setFiltered]=useState([])

    useEffect(()=>{
  const temp=list.filter((el)=>el.completed===select);
 setFiltered(temp);
    }
    ,[select,list])
  return (  
<div className='card m-4 p-3'>
    <div className='card-body'>
        <select
        className='form-control mb-4'
        defaultValue={select}
        onChange={(e)=>setSelect(e.target.value == 'true')}
        >
            <option value={false}>New</option>
            <option value={true}>Completed</option>
        </select>
        {/* <div>{select.toString()}</div> */}
        <AllTask List={filtered}/>
       
    </div>

</div>
  )
}
