import React from 'react';
import './style.css';
import Main from '../../components/Main';

import Sidebar from '../../components/Sidebar';

const Home = props=>{
    return(
        <section className="mainContainer">
            <Main />
            <Sidebar />
        </section>
    );
}

export default Home;