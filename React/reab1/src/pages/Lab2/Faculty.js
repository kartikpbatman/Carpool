import React from "react";
function Faculty(){
    const arr=['Faculty1','Faculty2','Faculty3','Faculty4','Faculty5','Faculty6']
    const myStyles={
        border: "2px black solid",
    }
    return(<>
        <table style={myStyles}>
         
                <tr >
                    <th>Faculty Name</th>
                </tr>
              
                    {
                        arr.map((ar)=>{
                            return <tr><td>{ar}</td></tr>
                        })
                    }
      
        </table>
    </>);
}
export default Faculty;