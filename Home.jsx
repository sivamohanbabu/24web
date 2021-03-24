import React, { useState } from 'react';
import{ Redirect} from "react-router-dom";

import './Home.css'
import Popup from './Popup';
const Home =()=>{

    const [isAuth ,setIsAuth] = useState(true);

if(!isAuth){

    return <Redirect to ="/Register"/>

}

        return (
            
            <div className="wrapper">
      
     
                <div className="header">
                Tuesday, Mar 24 , 2021
                <div className="context">
                    <p>WELCOME TO SKILLS ACCESSMENT TEST</p>
                    <select name="purpose" class="_signup-input text-bold input form-control text-uppercase" id="signup-purpose">
                                                            <option selected="selected" value="-1" disabled="">select your skill options*</option>
                                                            <option value="0">Psychometric Test</option>
                                                            <option value="1">Personality Test</option>
                                                            <option value="2">General Mental Test</option>
                                                            <option value="3">Integrity Test</option>
                                                            <option value="4">Job Knowledge Test</option>
                                                            <option value="5">Situational Judgement Test</option>
                                                            <option value="6">overall skill Assessment Test</option>
                                                        </select>
                                                        <span class="role input-icon"></span>
                                                    
                    
                <div className="footer">
                   * click below " slot booking button" to go further process
                    <div>
                    <button type="submit" class="btn" onClick={()=>setIsAuth(false)}>
                  <span>SLOT BOOKING</span>  
                    </button>
                    </div>
                </div>
                </div>
  </div>
  
  <div class="featuredBulletPoints">
      <div class="titleWithIcon"> 
     
    Some of the most sought-after skills required by employers during the recruitment,
      *Skill assessment tests are the tests created to measure and evaluate candidates' and employees' skills needed for successful job performance. ... Skill assessment tests measure actual skills, most commonly referred to as soft skills and technical skills.
  
      
   
       </div>
       
       </div>
     <Popup/>
 
       </div>
        )
    }


export default Home;
