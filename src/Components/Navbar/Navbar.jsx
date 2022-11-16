import { ChatBubbleOutlineOutlined, DarkModeOutlined, FullscreenExitOutlined, LanguageOutlined, ListAltOutlined, NotificationsNoneOutlined, SearchOutlined } from '@mui/icons-material';
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
                <div className="item">
                    <LanguageOutlined/>
                    English
                </div>
                <div className="item">
                    <DarkModeOutlined/>
                </div>
                <div className="item">
                    <FullscreenExitOutlined/>
                </div>
                <div className="item">
               <NotificationsNoneOutlined/>
                </div>
                <div className="item">
                <ChatBubbleOutlineOutlined/>
                </div>
                <div className="item">
                <ListAltOutlined/>
                </div>
            </div>
            </div>
                    
        </div>
    );
};

export default Navbar;