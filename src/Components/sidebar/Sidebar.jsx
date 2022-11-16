import { CalendarMonth, ChangeCircle, Compare, Flag, LocationCity, SouthAmerica, Speed, Topic } from '@mui/icons-material';
import DashboardIcon from '@mui/icons-material/Dashboard';
import React from 'react';
import './Sidebar.scss';
const Sidebar = () => {
    return (
        <div className='sidebar'>
            {/* -------logo-------- */}
            <div className='top'>
              <span className='logo'>Saymanadmin</span>
            </div>
            <hr />
            <div className='center'>
                <ul>
                    <p className="tittle">Main</p>
                    <li>
                        <DashboardIcon  className="icon"/>
                        <span>Dashboard</span>
                    </li>
                    <p className='tittle'>
                        Features</p>
                    <li>
                        <Speed className="icon"/>
                        <span>Intensity</span>
                    </li>
                    <li>
                        <ChangeCircle className="icon"/>
                        <span>Likelihood</span>
                    </li>
                    <li>
                        <Compare className="icon"/>
                        <span>Relevance</span>
                    </li>
                    <li>
                        <CalendarMonth className="icon"/>
                        <span>Year</span>
                    </li>
                    <li>
                        <Topic className="icon"/>
                        <span>Topics</span>
                    </li>
                    <p className="tittle">Geography</p>
                    <li>
                        <Flag className="icon"/>
                        <span>Country</span>
                    </li>
                    <li>
                        <SouthAmerica className="icon"/>
                        <span>Region</span>
                    </li>
                    <li>
                        <LocationCity className="icon"/>
                        <span>City</span>
                    </li>
                </ul>
            </div>
            <div className='bottom'>Color Option</div>
        </div>
    );
};

export default Sidebar;