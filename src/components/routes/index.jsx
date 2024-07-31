import { Routes ,Route } from "react-router-dom";
import TodoComponent from "../Todo";
import Message from "../Message";
import CounterComponent from "../../counter";

export default function Routercomponent(){
   return(
    <Routes>
        <Route path="/" element=<TodoComponent/> />
        <Route path="message" element=<Message/> />
        <Route path="count" element=<CounterComponent/> />
    </Routes>
   )

}