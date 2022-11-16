import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Sidebar from '../../Components/sidebar/Sidebar';
import Widgest from '../../Components/widgets/Widgest';
import './Home.scss';
const Home = () => {
    return (
        <div className='home'>
            <Sidebar/>
            <div className="homeContainer">
                <Navbar/>
                <div className="widgets">
                    <Widgest/>
                    <Widgest/>
                    <Widgest/>
                    <Widgest/>
                </div>
            </div>
        </div>
    );
};

export default Home;