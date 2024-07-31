import { useState } from "react";

export default function useCount(){
const [count,setCount]=useState(0);

 const increment=()=>{
  setCount(count=>count+1);
 }

  const decrement=()=>{
    setCount(count=>count-1);
}

    const reset=()=>{
        setCount(0);
    }
 return [count,increment,decrement,reset];
}
  