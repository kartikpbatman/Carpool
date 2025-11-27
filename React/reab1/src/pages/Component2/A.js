import React from "react";
import { useState } from "react";
import B from "./B.js";
function A(props){
    
    const [value,setValue]=useState("");
    
    return(
        <>
            <input type="text" onChange={(e)=>setValue(e.target.value)}/>
            <B name={props.name} setName={props.setName} value={value}/>
        
        </>
    );
}
export default A;