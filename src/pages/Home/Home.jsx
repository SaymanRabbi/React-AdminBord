import React from 'react';
import Sidebar from '../../Components/sidebar/Sidebar';
import './Home.scss';
const Home = () => {
    return (
        <div className='home'>
            <Sidebar/>
            <div className="homeContainer">home container</div>
        </div>
    );
};

export default Home;