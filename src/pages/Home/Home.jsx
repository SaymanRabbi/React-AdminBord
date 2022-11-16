import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Sidebar from '../../Components/sidebar/Sidebar';
import './Home.scss';
const Home = () => {
    return (
        <div className='home'>
            <Sidebar/>
            <div className="homeContainer">
                <Navbar/>
                home container</div>
        </div>
    );
};

export default Home;