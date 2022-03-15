import React from "react";
import "./form.css"









function Form(){



return(

<div className="container margl2 mt-4 mb-4">
    <div className ="row justify-content-center">
        <div className="col-md-4 text-center formheader">


        <div className="headermarginl">
        
        Submit An Intake Form

        </div>





        </div>
        <div className="col-md-5 formmargin">

        <form className="formrealmarg">
            <fieldset>
            <div class="form-group">
    <label for="exampleInputEmail1">First Name</label>
    <input type="text" class="form-control inputsize" id="exampleInputEmail1" aria-describedby="Firstname" placeholder="First Name"/>
    {/*<small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>*/}
  </div>

  <div class="form-group mt-4">
    <label for="exampleInputEmail1 ">Last Name</label>
    <input type="text" class="form-control inputsize" id="exampleInputEmail1" aria-describedby="Lastname" placeholder="Last Name"/>
    {/*<small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>*/}
  </div>

  <div class="form-group mt-4">
    <label for="exampleInputEmail1 ">Date of Birth</label>
    <input type="text" class="form-control inputsize" id="exampleInputEmail1" aria-describedby="Lastname" placeholder="Date Of Birth"/>
    {/*<small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>*/}
  </div>


  <div class="form-group mt-4">
    <label for="exampleInputEmail1 ">Email Address</label>
    <input type="text" class="form-control inputsize" id="exampleInputEmail1" aria-describedby="Lastname" placeholder="Date Of Birth"/>
    {/*<small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>*/}
  </div>








            </fieldset>



            <a href="google.com" class="button mt-4 btncolor button-primary button-small">Click To Complete Form</a>

        </form>




        




        </div>




    
    
    
    
    
    
    </div>

    </div>





)










}




export default Form