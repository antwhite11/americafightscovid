import React from "react";
import './longform.css'







function Longform (){

return(


<div className="container mb-5">
<div className="row justify-content-center">
<div className="col-md-8 background">

<h1 className="text-center formheaderagain mb-5">Patient Intake Form</h1>

<form>
  <div class="form-group">
    <label for="exampleInputEmail1">First Name</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="Firstname" placeholder="First Name"/>
    {/*<small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>*/}
  </div>

  <div class="form-group mt-4">
    <label for="exampleInputEmail1">Last Name</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="Lastname" placeholder="Last Name"/>
    {/*<small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>*/}
  </div>

  <div class="form-group mt-4">
    <label for="exampleInputEmail1">Date of Birth</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="Lastname" placeholder="Date Of Birth"/>
    {/*<small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>*/}
  </div>


  <div class="form-group mt-4">
    <label for="exampleInputEmail1">Home Address</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="Lastname" placeholder="Home Address"/>
    {/*<small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>*/}
  </div>

  <div class="form-group mt-4">
    <label for="exampleInputEmail1">Email Address</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="Lastname" placeholder="Email Address"/>
    {/*<small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>*/}
  </div>

  <div class="form-group mt-4">
    <label for="exampleInputEmail1">SSN#</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="Lastname" placeholder="SSN#"/>
    {/*<small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>*/}
  </div>


  <div class="form-group mt-4">
    <label for="exampleInputEmail1">Insurance/NA</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="Lastname" placeholder="Insurance/NA"/>
    {/*<small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>*/}
  </div>

  <div class="form-group mt-4">
    <label for="exampleInputEmail1">Carrier</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="Lastname" placeholder="Carrier"/>
    {/*<small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>*/}
  </div>

  <div class="form-group mt-4">
    <label for="exampleInputEmail1">Policy #</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="Lastname" placeholder="Policy #"/>
    {/*<small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>*/}
  </div>

  <div class="form-group mt-4">
    <label for="exampleFormControlSelect1">Sex</label>
    <select class="form-control" id="exampleFormControlSelect1">
      <option className="disabledfont" value="" disabled selected hidden>Select One</option>
      <option>Female</option>
      <option>Male</option>
      <option>Other</option>
      <option>Prefer not to say.</option>
    </select>
  </div>

  <div class="form-group mt-4">
    <label for="exampleFormControlSelect1">Ethnicity</label>
    <select class="form-control" id="exampleFormControlSelect1">
      <option className="disabledfont" value="" disabled selected hidden>Select One</option>
      <option>Hispanic or Spanish Origin</option>
      <option>Not Hispanic or Spanish Origin</option>
      <option>Prefer not to say.</option>
    </select>
  </div>


  <div class="form-group mt-4">
    <label for="exampleFormControlSelect1">Race</label>
    <select class="form-control" id="exampleFormControlSelect1">
      <option className="disabledfont" value="" disabled selected hidden>Select One</option>
      <option>American Indian or Alaskan Native</option>
      <option>Asian</option>
      <option>Black or African American</option>
      <option>Multi-Racial</option>
      <option>Native Hawaiian or other Pacific Islander</option>
      <option>White</option>
      <option>Other</option>

    </select>
  </div>


  <div class="form-group mt-4">
    <label for="exampleFormControlSelect1">Please identify any symptoms you may be having.</label>
    <select class="form-control" id="exampleFormControlSelect1">
      <option className="disabledfont" value="" disabled selected hidden>Select One</option>
      <option>Coughing</option>
      <option>Sneezing/Sniffling</option>
      <option>Fever/Chills</option>
      <option>Shortness of Breath</option>
      <option>Fatigue</option>
      <option>Loss of Taste</option>
      <option>Loss of Smell</option>
      <option>Sore Throat</option>
      <option>Nausea</option>
      <option>Diarrhea</option>
      <option>Vomiting</option>
      <option>None of the above.</option>

    </select>
  </div>


  <div class="form-group mt-4">
    <label for="exampleFormControlSelect1">Have you been fully vaccinated?</label>
    <select class="form-control" id="exampleFormControlSelect1">
      <option className="disabledfont" value="" disabled selected hidden>Select One</option>
      <option>Yes- 2 or more Moderna/Pfizer doses, 1 or ore of J&J dose or other brand</option>
      <option>No</option>
      <option>Prefer not to say.</option>
    </select>
  </div>


  <div class="form-group mt-4">
    <label for="exampleFormControlSelect1">Are you employed in any of the following industries?</label>
    <select class="form-control" id="exampleFormControlSelect1">
      <option className="disabledfont" value="" disabled selected hidden>Select One</option>
      <option>Healthcare</option>
      <option>Retail or Manufacturing</option>
      <option>Emergency Services</option>
      <option>Food Service</option>
      <option>Agricultural or Food Manufacturing</option>
      <option>Public Transportation</option>
      <option>Correctional Facilities</option>
      <option>Education</option>
      <option>Other</option>
    

    </select>
  </div>
  
  <div class="form-group mt-4">
    <label for="exampleFormControlSelect1">In the last 14 days, have you come into contact with a person known to be infected with COVID-19?</label>
    <select class="form-control" id="exampleFormControlSelect1">
      <option className="disabledfont" value="" disabled selected hidden>Select One</option>
      <option>Yes</option>
      <option>No</option>
    </select>
  </div>

  <div class="form-group mt-4">
    <label for="exampleFormControlSelect1">Have you had an appointment with America Fights COVID?</label>
    <select class="form-control" id="exampleFormControlSelect1">
      <option className="disabledfont" value="" disabled selected hidden>Select One</option>
      <option>Yes</option>
      <option>No</option>
    </select>
  </div>

  <div class="form-group mt-4">
    <label for="exampleFormControlFile1">Submit Identification</label>
    <input type="file" class="form-control-file mt-1 inputmargin" id="exampleFormControlFile1"/>
  </div>






 
  <button type="submit" class="btn btn-primary mt-3">Submit</button>
</form>










</div>













</div>





</div>











)












}


export default Longform