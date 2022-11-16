import { SearchOutlined } from '@mui/icons-material';
import React from 'react';
import './Navbar.scss';
const Navbar = () => {
    return (
        <div className='navbar'>
            <div className="wrapper">   
            <div className="search">
                <input type="text" placeholder="Search..." className="searchInput"/>
                <SearchOutlined/>
            </div>
            <div className="items">
                <div className="item"></div>
                <div className="item"></div>
                <div className="item"></div>
            </div>
            </div>
                    
        </div>
    );
};

export default Navbar;