// LAB 1



// import Cond from "./pages/Lab1/Cond.js";
// import Name from "./pages/Lab1/Name.js";
// import Nameclass from "./pages/Lab1/Nameclass.js";
// import Rollp from "./pages/Lab1/Rollp.js";
// import Event from "./pages/Lab1/Event.js";
// function App() {
//   return (
//     <>
//       <header>
//         <nav>
//           <div><Name/></div>
//           <div><Nameclass/><Rollp rollno={247}></Rollp></div>
//           <Event/>
//           <Cond/>
//         </nav>
//       </header>
//     </>
//   );
// }

// export default App;



// LAB 2

import Faculty from "./pages/Lab2/Faculty.js";
import A from "./pages/Component/A.js";
import Student from "./pages/Lab2/Student.js";
function App(){
    return(
        <>
            <Faculty/>
            <Student/>
            <A name="Kartik"/>
        </>
    );
}

export default App;