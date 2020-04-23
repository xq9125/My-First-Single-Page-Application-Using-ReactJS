import React from 'react';
import './style.css';
import Card from '../UI/Card';

const BlogPost3=(props)=>{
    return(
        
        <div className ="blogPostContainer">
            <Card>
                <div className="blogHeader">
                    <span className="blogCategory">Cloudy</span>
                    <h1 className="postTitle">Blog 3</h1>
                    <span className="postedby">By Qiang Xu April 21 2020</span>

                </div>
                <div className="postImage">
                    <img src={require('../../assets/blogimage04.jpg')} alt="Post Image3" />

                </div>
                <p>My third day of posting blog, feeling frustrated to finish my project</p>
            </Card>

        </div>
        
    )
}

export default BlogPost3