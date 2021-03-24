import React, { Component } from 'react'
import './Site.css'

export class Site extends Component {
    render() {
        return (
            <div className="ui-wrapper">
                <div className="cd-main-header">

                   SKILL TEST ASSESSMENT 
                
                  </div>
                    <hr></hr>
                    <div className="container">
                        <div className="nav">
                           <div className="nav-link"><button>HOME</button></div>
                           <div className="nav-link"><button>ABOUT</button></div>
                           <div className="nav-link"><button>SERVICES</button></div>
                           <div className="nav-link"><button>IMMIGRATION</button></div>
                           <div className="nav-link"><button>ADMISSION</button></div>
                           <div className="nav-link"><button>COURSES</button></div>
                           <div className="nav-link"><button>GALLARY</button></div>
                           <div className="nav-link"><button>CAREERS</button></div>
                        </div>
                    </div>
                    <hr></hr>
                    
                </div>
           
         
        )
    }
}

export default Site
