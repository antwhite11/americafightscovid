import React from "react";
import Home from "./pages/home";
import About from "./pages/about";
import Formpage from "./pages/formpage";
import {BrowserRouter, Route,Routes} from "react-router-dom"


function App() {
  return (
    


      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="about" element={<About/>} />
      <Route path="intakeform" element={<Formpage/>}/>
      </Routes>
      </BrowserRouter>
      




  );
}

export default App;
