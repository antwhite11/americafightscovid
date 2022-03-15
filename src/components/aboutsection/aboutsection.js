import React from "react";
import macipic from "./media/macisiteimg.jpeg"
import "./aboutsection.css"
import { Slide } from "@stahl.luke/react-reveal";






function AboutSection(){


return(

<div className="container abs">
    <div className="row justify-content-center">
        <div className="col-md-4 columnmarg">

        <div className="insidemarg mt-3  mb-3">
       
        <div className="abouttext">

                About Us



         </div>

         <div className="aboutdescription">

         I'm a paragraph. Click here to add your own text and edit me.
          It’s easy. Just click “Edit Text” or double click me to 
          add your own content and make changes to the font. 






         </div>

         <div className="mt-3">

      <Slide left><div> <a href="/" class="dabutton button button-primary">Learn More</a></div>  </Slide> 

         </div>
          
       
       
         </div>
       
       
       
       
        </div>

    <div className="col-md-4 seccolmarg">


       <Slide right> <div className="photo">
            <img className="imagesize" src={macipic} alt=""></img>


     
        
        </div></Slide>

    </div>



</div>

</div>







)







}


export default AboutSection