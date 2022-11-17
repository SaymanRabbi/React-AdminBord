import { ChatBubbleOutlineOutlined, DarkModeOutlined, FullscreenExitOutlined, LanguageOutlined, ListAltOutlined, NotificationsNoneOutlined, SearchOutlined } from '@mui/icons-material';
import React, { useContext } from 'react';
import { DarkModeContext } from '../../context/DarkModeContext';
import './Navbar.scss';
const Navbar = () => {
    const {dispatch} = useContext(DarkModeContext);

//    const Func = ()=>{
//     useEffect(() => {
//         dispatch({type: 'TOGGLE'});
//      }, [dispatch]);
//    }
    return (
        <div className='navbar'>
            <div className="wrapper">   
            <div className="search">
                <input type="text" placeholder="Search..." className="searchInput"/>
                <SearchOutlined className="icon"/>
            </div>
            <div className="items">
                <div className="item">
                    <LanguageOutlined className="icon"/>
                    English
                </div>
                <div className="item">
                    <DarkModeOutlined className="icon" onClick={()=>dispatch({type:"TOGGLE"})} />
                </div>
                <div className="item">
                    <FullscreenExitOutlined className="icon"/>
                </div>
                <div className="item">
               <NotificationsNoneOutlined className="icon"/>
               <div className="counter">1</div>
                </div>
                <div className="item">
                <ChatBubbleOutlineOutlined className="icon"/>
               <div className="counter">1</div>
                </div>
                <div className="item">
                <ListAltOutlined className="icon"/>
                </div>
                <div className="item">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2NcXil-zvsEbK0YBf9F8FuMzquqIGHTAbRedKI8s&s" alt="avatar"  className='avatar'/>
                </div>
            </div>
            </div>
                    
        </div>
    );
};

export default Navbar;