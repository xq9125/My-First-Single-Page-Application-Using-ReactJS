import React from 'react';
import './style.css';

import BlogPost2 from '../../components/BlogPost2';
import Sidebar from '../../components/Sidebar';

const Post2=(props)=>{
    return(
        <section className="container">
            <BlogPost2/>
            <Sidebar/>
            
        </section>
    )
}

export default Post2;