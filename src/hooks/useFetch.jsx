import axios from "axios";
import { useEffect, useState } from "react";

export default function useFetch(url){
  const[loading,setLoading]=useState(false);
  const[data,setData]=useState([]);
  const[error,setError]=useState(null);

  useEffect(()=>{
     setLoading(true);
     setError(null);
    fetch(url);
  },[url]);
function fetch(url){
  axios 
  .get(url)
  .then((res)=>{
   setLoading(false);
   setData(res.data);
  })
  .catch((err)=>{
   setLoading(false);
     setError(err);
  })
}
  return [loading,data,error,fetch];

}