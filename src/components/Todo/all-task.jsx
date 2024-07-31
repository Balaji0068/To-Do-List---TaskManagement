import axios from "axios"
import { memo, useContext, useEffect, useState } from "react";
import TodoCard from "./todo-card";
import { TodoContext } from ".";

  const AllTask =memo(({List})=>{
  console.log("use memo",List)
    return (
        <>
          {List.map((item)=>(
            <TodoCard key={item.id} {...item} data={item} />
          ))}
        </>
    )
});
export default AllTask;