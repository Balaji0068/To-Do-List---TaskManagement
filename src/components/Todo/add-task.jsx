import { useContext, useState } from "react"
import { TodoContext } from "."

export default function AddTask(){
    const {handleAdd}=useContext(TodoContext)
    const [input,setInput]=useState()

    function handleAddFunc(){
     const tmp= {userId: 1,
      title: input,
      completed: false,

    }
    handleAdd(tmp);
    }
    return(
    
        <div className="card me-4">
            <div className="card-body">
            <input className="form-control"
            placeholder="Add task"
            defaultValue={input}
            onChange={(e)=>setInput(e.target.value)}/>
            <div className="pt-2">
            <button class="btn btn-primary col-6" onClick={handleAddFunc} >Add</button>
            </div>
           
            </div>
        </div>
    
    )
}