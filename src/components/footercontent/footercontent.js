import React from "react";
import './footercontent.css';
import logo from './media/3.png'


function Footercontent(){


return (

<div className="container overallmarg">
    <div className="row">
        <div className="col-md-2">


        <img src={logo} className ="botlogosize" alt="logo"></img>

        </div>

            
        <div className="col-md-2 contactmarg">

        <h1 className="footerheader">Contact</h1>
        <p className="footercontact">For any questions or concerns<br/>
                                     call 123-456-7890<br/>
                                     or email: afc@123mail.com

            </p>




        </div>



        <div className="col-md-2 buttoncol">



        <a href="/" class="footerbutton button button-primary">Schedule</a>




        </div>

        <div className="col-md-3 copyright">


        <p className="copyrightfont">© 2022 America Fights Covid </p>



        </div>





    </div>
    
    
    
      </div>




)

}



export default Footercontent



