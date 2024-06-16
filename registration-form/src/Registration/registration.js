import React from 'react'
import './style.css';

function registration() {
  return (
    <div>
        <div className="contant">
            <h2>Registration <br></br> <span>Form</span></h2>
        </div>
        <div className="vl"></div>
        <div className='parents'>
        <h1><u>Registration
        </u></h1>
        <p>Personal Details</p>
        <form name="myForm" action="/action_page.php">
        <div className='child'>
        <div className="input-filed">
         <label for="Name">Full Name</label>
        <input name="Name" id="Name" type="text" placeholder="Enter the Full Name" maxlength="15" minlength="3" required></input>
        </div>

     <div class="input-filed">
        <label for="email">Email</label>
        <input type="email" id="email" placeholder="Enter The E-mail" required></input>
    </div>

   <div class="input-filed">
    <label for="number">Number</label>
    <input type="tel" id="number" placeholder="Enter the Phone Number" maxlength="11" minlength="9" required></input>
    </div>


     <div class="input-filed">
        <label for="birth">Date Of Birth</label>
        <input type="datetime-local" id="birth" required></input>
    </div>

               <div className="input-filed">
                    <label for="gender">Gender</label>
                    <input list="genders" name="gender" id="gender" placeholder="Enter The Gender" required></input>
                    <datalist id="genders">
                      <option value="Femail"></option>
                      <option value="Mail"></option>
                      <option value="Other"></option>
                    </datalist>
                    </div>
                        <div class="input-filed">
                            <label for="country">Country</label>
                    <input list="countrys" name="country" id="country" placeholder="Other" required></input>
                    <datalist id="countrys">
                              <option value="Other"></option>
                              <option value="India"></option>
                              <option value="America"></option>
                              <option value="China"></option>
                              <option value="Nepal"></option>
                              <option value="Pakistan"></option>
                              <option value="Bangladesh"></option>
                            </datalist>
                        </div>
                   
                        <div class="button">
                            <button type="submit"> Submit</button>
                        </div>

        </div>

        </form>

        </div>
      
    </div>
  )
}

export default registration
