import React from "react";
import { useState } from "react";
import B from "./B.js";
function A(props){
    const[name,setName]=useState("");
    setName(props.name);
    <B name={name}/>
}
export default A;