import React from 'react';
import './style.css';

import BlogPost3 from '../../components/BlogPost3';
import Sidebar from '../../components/Sidebar';

const Post3=(props)=>{
    return(
        <section className="container">
            <BlogPost3/>
            <Sidebar/>
            
        </section>
    )
}

export default Post3;