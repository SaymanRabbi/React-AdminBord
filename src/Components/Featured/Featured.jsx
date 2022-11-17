import { MoreVert } from '@mui/icons-material';
import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import './Featured.scss';
const Featured = ({country,intensity}) => {
    return (
        <div className='featured'>
           <div className="top">
             <h1 className='tittle'>Total Country / 10</h1>
             <MoreVert fontSize='small'/>
           </div>
           <div className="bottom">
             <div className="container">
             <CircularProgressbar value={parseInt(country) /10} text={`${parseInt(country) /10}%`} strokeWidth={5}/>
             </div>
             <p className='tittle'>Total Intensity</p>
             <p className='amount'>{intensity}</p>
             <p className='dec'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia</p>
           </div>
        </div>
    );
};

export default Featured;