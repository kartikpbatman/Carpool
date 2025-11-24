import Name from "./pages/Name.js";
import Nameclass from "./pages/Nameclass.js";
import Rollp from "./pages/Rollp.js";
import Event from "./pages/Event.js";
function App() {
  return (
    <>
      <header>
        <nav>
          <div><Name/></div>
          <div><Nameclass/><Rollp rollno={247}></Rollp></div>
          <Event/>
        </nav>
      </header>
    </>
  );
}

export default App;