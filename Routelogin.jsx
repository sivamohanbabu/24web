import React, { useState } from 'react';
import{ Redirect} from "react-router-dom";

const Register =()=>{

    const [isAuth ,setIsAuth] = useState(true);

if(!isAuth){

    return <Redirect to ="/login"/>

}

  return (
            <div className="base-container">
               
        
                    <button type="button" className="btn" onClick={()=>setIsAuth(false)}>
                        login
                    </button>
                </div>
             
     
     

        )
    }


export default Register;