import React from "react";
import C from "./C.js";
function B(props){

    function Change(){
        props.setName(props.value);
    }
    return(
        <>
            <button onClick={Change}>Ok</button>
            <C name={props.name} setName={props.setName}/>
        </>
    );
}
export default B;