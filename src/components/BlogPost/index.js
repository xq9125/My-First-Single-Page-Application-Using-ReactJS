import React from 'react';
import './style.css';
import Card from '../UI/Card';

const BlogPost=(props)=>{
    return(
        
        <div className ="blogPostContainer">
            <Card>
                <div className="blogHeader">
                    <span className="blogCategory">Sunny</span>
                    <h1 className="postTitle">Blog 1</h1>
                    <span className="postedby">By Qiang Xu April 18 2020</span>

                </div>
                <div className="postImage">
                    <img src={require('../../assets/blogimage02.jpg')} alt="Post Image" />

                </div>
                <p>Today is the first time I post my blog, and I will record my personal daily event.</p>
            </Card>

        </div>
        
    )
}

export default BlogPost