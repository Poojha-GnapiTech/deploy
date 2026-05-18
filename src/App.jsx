import {Routes,Route,Link,NavLink} from "react-router-dom";


import Home from "./Home";
import About from "./About";
import Contact from "./Contact";

function App() {
  return (
  <div className="min-h-screen bg-gray-700">
    <nav className="flex justify-center text-center bg-black text-white mx-auto gap-10 p-5">
      <Link to="/Home">Home</Link>|{}
      <NavLink to="/About" className={({isActive})=>isActive?"text-yellow-700":""}>About</NavLink>|{}
      <Link to="/Contact">Contact</Link>
    </nav>
  <Routes>
    <Route path="/Home" element={<Home/>}/>
    <Route path="/About" element={<About/>}/>
    <Route path="/Contact" element={<Contact/>}/>
  </Routes>
  </div>
  );
}

export default App;