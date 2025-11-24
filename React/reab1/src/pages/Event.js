import React from "react";

function Event(){
    function handleClick(){
        alert("clicked");

    }
    return(
        <>
            <div>
                <h5><button onClick={handleClick}>Click The Button</button></h5>
            </div>
        </>
    );
}
export default Event;