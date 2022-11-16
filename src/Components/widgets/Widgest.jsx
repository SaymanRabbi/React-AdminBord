import { KeyboardArrowUp } from '@mui/icons-material';
import React from 'react';
import './Widgest.scss';
const Widgest = ({type,total}) => {
    return (
        <div className='widgest'>
             <div className="left">
               <span className='tittle'>{type?.tittle}</span>
               <span className='Counter'>{ total}</span>
               <span className='link'>{type?.link}</span>
             </div>
             <div className="right">
                <div className='percentage positive nagitive'>
                    <KeyboardArrowUp/>
                    20%
                </div>
                {type?.icon}
             </div>
        </div>
    );
};

export default Widgest;