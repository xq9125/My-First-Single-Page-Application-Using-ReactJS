import React from 'react';
import './style.css';
import Card from '../UI/Card';

import {NavLink} from 'react-router-dom';




const Main=(props)=>{
    return(
        
        <div className="postContainer">
            
                <ul className="postMenu">

                    <body className="sum">
                        <li><NavLink to="/post">Blog 1</NavLink></li>
                        <p className="sni">My first blog<img  src={require('../../assets/blogimage02.jpg')} alt="Post Image" height="50" width="50" /></p>

                    </body>

                    <body className="sum">
                        <li><NavLink to="/post2">Blog 2</NavLink></li>
                        <p className="sni">My second blog<img  src={require('../../assets/blogimage03.jpg')} alt="Post Image2" height="50" width="50" /></p>

                    </body>

                    <body className="sum">
                        <li><NavLink to="/post3">Blog 3</NavLink></li>
                        <p className="sni">My third blog<img  src={require('../../assets/blogimage04.jpg')} alt="Post Image3" height="50" width="50" /></p>

                    </body>
                    
                                      
                </ul>
                
            
                

        </div>
            
        
    )
} 

export default Main