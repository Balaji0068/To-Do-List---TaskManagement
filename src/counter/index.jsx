import useCount from "./useCount";

export default function CounterComponent(){
 const [count,increment,decrement,reset]=useCount();
return(
    <div className="card m-3 p-3">
   <div className="card-body">
    <h1 className="display-2 mb-3 text-center">{count}</h1>
    <div className="text-center">
    <button className="btn btn-primary mx-2" onClick={increment}>increment</button>
    <button className="btn btn-warning mx-2" onClick={decrement}>decrement</button>
    <button  className="btn btn-danger mx-2" onClick={reset}>reset</button>
    </div>
   </div>
  </div>

)
  
}