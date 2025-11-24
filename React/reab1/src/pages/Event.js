import React from "react";

function Event(){
    const myStyles = {
        color: "blue",
        float:"right",
        
        
        backgroundColor: "#f0f0f0",
      };
    function handleClick(){
        alert("clicked");

    }
    return(
        <>
            <div>
                <h5 style={myStyles}><button onClick={handleClick}>Click The Button</button></h5>
            </div>
        </>
    );
}
export default Event;