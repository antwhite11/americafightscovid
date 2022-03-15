import React,{useState} from "react";
import { Link } from "react-router-dom";
import trentimg from "./media/fixedlogo.png";
import "./header.css";
import { NavDropdown } from "react-bootstrap";
import Zoom from "@stahl.luke/react-reveal"






function Header (){


    const [isNavCollapsed, setIsNavCollapsed] =useState(true);
  
    const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

return(

  <Zoom>  <div className="container-fluid mb-5 hello">

        <div className="row rowheight">


        <nav class="navbar navbar-expand-md py-0 navbar-light">
<div className="headersubgroupmargin">
        <Link class="navbar-brand" to="/"><img src={trentimg} className="trentcss nonmobilemarg" alt="trent"></img></Link>
        <span className="headerspan">America Fights Covid</span>
        <button class="navbar-toggler buttmarg" type="button" data-bs-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded={!isNavCollapsed ? true : false} aria-label="Toggle navigation" onClick={handleNavCollapse}>
    <span class="navbar-toggler-icon"></span>
  </button>
  </div>

  <div class={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse justify`} id="navbarNav">

  <ul class="navbar-nav listitemscent">

  <li class="nav-item">
        <Link class ="nav-link navhover listfont" to="/">HOME</Link>
      </li>




<li class="nav-item">
        <Link class ="nav-link listfont" to="/about">ABOUT</Link>
      </li>


    
      <li class="nav-item">
        <Link class ="nav-link listfont" to="/intakeform">SCHEDULE</Link>
      </li>



  </ul>






  </div>

        </nav>
            







        </div>


    






    </div></Zoom>



)

}





export default Header