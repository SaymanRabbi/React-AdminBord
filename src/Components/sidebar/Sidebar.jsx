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
                    <li>
                        <DashboardIcon/>
                        <span>Dashboard</span>
                    </li>
                    <li>
                        <Speed/>
                        <span>Intensity</span>
                    </li>
                    <li>
                        <ChangeCircle/>
                        <span>Likelihood</span>
                    </li>
                    <li>
                        <Compare/>
                        <span>Relevance</span>
                    </li>
                    <li>
                        <CalendarMonth/>
                        <span>Year</span>
                    </li>
                    <li>
                        <Flag/>
                        <span>Country</span>
                    </li>
                    <li>
                        <Topic/>
                        <span>Topics</span>
                    </li>
                    <li>
                        <SouthAmerica/>
                        <span>Region</span>
                    </li>
                    <li>
                        <LocationCity/>
                        <span>City</span>
                    </li>
                </ul>
            </div>
            <div className='bottom'>Color Option</div>
        </div>
    );
};

export default Sidebar;