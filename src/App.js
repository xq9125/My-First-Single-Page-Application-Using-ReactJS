import React from 'react';
import './App.css';
import Home from './containers/Home';
import Header from './components/Header';
import Hero from './components/Hero';
import{BrowserRouter as Router,Switch, Route} from 'react-router-dom';
import Post2 from './containers/post2';
import Post from './containers/Post';
import Footer from './components/Footer';
import Post3 from './containers/Post3';






function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Hero />
        
        <Route path="/" exact component={Home}/>
        <Route path="/post2" component={Post2}/>
        <Route path="/post" component={Post}/> 
        <Route path="/post3" component={Post3}/> 
        <Footer />
        
      </div>

    </Router>
    
  );
}

export default App;
