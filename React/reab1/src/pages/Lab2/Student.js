import React from "react";
function Student(){
    const arr=['Student1','Student2','Student3','Student4','Student5','Student6']
    const myStyles={
        border: "2px black solid",
    }
    return(<>
        <table style={myStyles}>
         
                <tr >
                    <th>Student Name</th>
                </tr>
              
                    {
                        arr.map((ar)=>{
                            return <tr><td>{ar}</td></tr>
                        })
                    }
      
        </table>
    </>);
}
export default Student;