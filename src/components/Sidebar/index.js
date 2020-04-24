import React,{Component} from 'react';
import './style.css';
import Card from '../UI/Card';
import {NavLink} from 'react-router-dom';



export default class Sidebar extends Component{
    constructor(){
        super();
        this.state ={
            list:[],
            error:null
        }
    }
    buildList =(data)=>{
        console.log(data);
        this.setState({list:data.articles})

    }
    componentDidMount(){
        let url = 'http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=a8d4fd7fb4e3434296f15024a44a836e';
        fetch(url)
        .then(response => response.json())
        .then(this.buildList)
        .catch()
        
    }
    
    render(){
        return(

            <Card style={{width:'27%'}}>
                
            <div>
                Navigation
                
                <li><NavLink to="/">Home</NavLink></li>
                <h1>Top Business News</h1>
                <meta http-equiv="refresh" content="5"/>
                <ul>
                    {
                        this.state.list.length === 0 &&
                        <li>Sorry no data available</li>
                    }
                    { this.state.list.length >0 &&
                        this.state.list.map((item)=>(
                            <li>{item.title + " " + item.author}</li>
                        ))
                        
                    }

                </ul>
                {this.state.error &&
                    <h3>{this.state.error}</h3>
                }
            </div>
            </Card>
        )
    }
}

