
import AllTask from "./all-task";
import axios from "axios";
import { createContext, useEffect, useState } from "react";
import AddTask from "./add-task";
import useFetch from "../../hooks/useFetch";
import FilterTask from "./Filter-task";
const sample ={
    "userId": 1,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
}
export const TodoContext=createContext([])
export default function TodoComponent(){
    const [list ,setList] =useState([])
    const [loading,data,error,fetch]=useFetch("https://localhost:5000/todo?UserId=1");
    // useEffect(()=>{
        
    // },[])
    useEffect(()=>{
        fetch("http://localhost:5000/todo?userId=1")
     setList(data)
    },[data])

         function handleUpdate(obj){
          obj.completed = !obj.completed;
          axios
            .put(`http://localhost:5000/todo/${obj.id}`,obj)
            .then((res)=>{
                console.log(res);
                fetch("http://localhost:5000/todo?userId=1")
            }) 
            .catch((err)=>console.log(err))
    }
    function handleDelete (id){
      axios 
        .delete(`http://localhost:5000/todo/${id}`)
        .then((res)=>{
            // console.log(res)
            fetch("http://localhost:5000/todo?userId=1")
        })
        .catch((err)=>{})
    }
    function handleAdd(obj){
        axios 
         .post("http://localhost:5000/todo",obj)
         .then((res)=>{
            fetch("http://localhost:5000/todo?userId=1")
         })
         .catch((err)=>console.log(err))
    }
     
  
    return(
        <TodoContext.Provider value={{list ,handleUpdate ,handleDelete ,handleAdd}}>
        <div className="row">
          
          {/* {error && (<h2 className="alert alert-danger">{error.message}</h2>)} */}
            <div className="col-md-6">
            {loading &&<h2 className="fs-1">Loading.........</h2>}
             <h4 className="text-center">AllTask</h4>
             <AddTask/>
             <AllTask List={list}/>
            </div>
            <div className="col-md-6">
             <h4 className="text-center">Completed Task</h4>
             <FilterTask/>   
            </div>
        </div>
        </TodoContext.Provider>
       
    );
}