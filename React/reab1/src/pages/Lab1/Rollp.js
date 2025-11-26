import React from "react";
function Rollp(props){
    const myStyles = {
        color: "blue",
        float:"left",
        fontSize: "16px",
        padding: "10px",
        backgroundColor: "#f0f0f0",
      };
    return(
        <><p style={myStyles}>Roll-No={props.rollno}</p></>
    );

    
}
export default Rollp;