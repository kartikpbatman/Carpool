import React from "react";
import C from "./C.js";
import { useState } from "react";
function B(props){
    const[name,setName]=useState("");
    setName(props.name);
    <C name={name}/>
}
export default B;