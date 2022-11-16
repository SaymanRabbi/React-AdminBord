import React from 'react';

const Sidebar = () => {
    return (
        <div className='sidebar'>
            {/* -------logo-------- */}
            <div className='top'>
              <span className='logo'>Saymanadmin</span>
            </div>
            <div className='center'>
                <ul>
                    <li><span>Dashboard</span></li>
                    <li><span>Dashboard</span></li>
                    <li><span>Dashboard</span></li>
                    <li><span>Dashboard</span></li>
                </ul>
            </div>
            <div className='bottom'>Color Option</div>
        </div>
    );
};

export default Sidebar;