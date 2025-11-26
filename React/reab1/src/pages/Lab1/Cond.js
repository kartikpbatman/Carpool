import React from "react";
function Cond(){
  const arr=[10,20,30,40,50];
  var pass=1;
  return(
    <>
      
      {pass ? <div>passed</div> : <div>failed</div>}
     
      <ul>
        {
          arr.map((value)=>{
            return <li>{value}</li>
          })
        }
      </ul>
    </>
  );
}
export default Cond;