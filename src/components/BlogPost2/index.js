import React from 'react';
import './style.css';
import Card from '../UI/Card';

const BlogPost2=(props)=>{
    return(
        
        <div className ="blogPostContainer">
            <Card>
                <div className="blogHeader">
                    <span className="blogCategory">Cloudy</span>
                    <h1 className="postTitle">Blog 2</h1>
                    <span className="postedby">By Qiang Xu, April 19 2020</span>

                </div>
                <div className="postImage">
                    <img src={require('../../assets/blogimage03.jpg')} alt="Post Image2" />

                </div>
                <p>The second day of posting my blog, nothing important to record down.</p>
            </Card>

        </div>
        
    )
}

export default BlogPost2