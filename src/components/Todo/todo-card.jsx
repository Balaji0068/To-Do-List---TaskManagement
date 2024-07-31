import { useContext } from "react"
import { TodoContext } from "."

export default function TodoCard(props){
  const context =useContext(TodoContext);
    return(
        <div>
      <div className="card m-2 me-3" >
     <div className="card-body row">
      <div className="col-2">
      <input className="form-check-input" 
      type="checkbox" 
      defaultChecked={props.completed}
      onClick={()=>context.handleUpdate(props.data)} 
      id={props.id}/>
      </div>
      <div className="col-7">
        <div 
        htmlFor={props.id}
        className={`${props.completed?"text-decoration-line-through":""}`}>
        {props.title}
        </div>
      
      </div>
      <div className="col">
        <button className="btn btn-danger" onClick={()=>context.handleDelete(props.id)}>Delete</button>
      </div>
      </div>
     </div>
     </div>
      
        
    )
}