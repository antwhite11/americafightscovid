import React from "react";
import bgpic from "./media/coronavirus-5739918.jpg"
import "./booksection.css"
import { Slide } from "@stahl.luke/react-reveal";
import { Fade } from "@stahl.luke/react-reveal";






function Booksection(){

return(


<div className="container xkill">
<div className="row">
<Slide left><div className="col-md-12 bgpic">
<img src={bgpic} alt="hello" className="picsize"></img>

</div></Slide>

<div className="ontop">

<div className="insidecard"> 


    
    
    </div>

    <div className="insidetext">
    
    <div className="safedrive">Safe Drive-Thru Medical Testing </div>
    <div className="smalltext">I'm a paragraph. Click here to add your own text and edit me.</div>
   <Fade> <div className="linkname"> <a href="google.com" class="button mt-2 btncolor button-primary button-small">Book Appointment</a></div> </Fade>

   
    
    </div>
    


</div>



</div>

</div>









)









}



export default Booksection