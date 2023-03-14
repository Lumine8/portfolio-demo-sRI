import {  BrowserRouter as Router,  Routes,  Route} from "react-router-dom";

import Navbar from './Components/Navbar';
/*
import HomePage from "./Components/HomePage";
import Aboutme from "./Components/AboutMe";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";*/
import Fullpage from "./Components/Fullpage";

const App = () => {
  return (
<Router>
    <Navbar/>
        <Routes>
            <Route path="/" element={<Fullpage/>}></Route>
            <Route path="/:HomeId" element={<Fullpage/>}></Route>
            <Route path="/:ProjectsId" element={<Fullpage/>}></Route>
            <Route path="/:ContactsId" element={<Fullpage/>}></Route>
        </Routes>
        </Router>
  )
}

export default App