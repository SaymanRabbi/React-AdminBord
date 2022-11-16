import { KeyboardArrowUp, PersonOutlined } from '@mui/icons-material';
import React from 'react';
import './Widgest.scss';
const Widgest = () => {
    return (
        <div className='widgest'>
             <div className="left">
               <span className='tittle'>COUNTREY</span>
               <span className='Counter'>100000</span>
               <span className='link'>See All Country</span>
             </div>
             <div className="right">
                <div className='percentage positive nagitive'>
                    <KeyboardArrowUp/>
                    20%
                </div>
                <PersonOutlined className='icon'/>
             </div>
        </div>
    );
};

export default Widgest;