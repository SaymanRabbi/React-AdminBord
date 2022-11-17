import { KeyboardArrowUp } from '@mui/icons-material';
import { LinearProgress } from '@mui/material';
import axios from "axios";
import React from 'react';
import { useQuery } from 'react-query';
import './Widgest.scss';
const Widgest = ({type,info}) => {
    let countryNum = 0
    let intensityNum = 0
    let likelihoodNum = 0
    let relevanceNum = 0
    const fetchUser = async () => {
        const response = await axios.get(
          "http://localhost:5000/api/v1/getAlldata"
        );
        return response.data;
      };
    const {data:alldata,isLoading,error} = useQuery('user',fetchUser)
    if(isLoading){
        return <LinearProgress/>
    }
    if(error){
        return <h1>Error...</h1>
    }
    alldata?.data?.map((i)=>{
        if(i.country){
            countryNum +=1
        }
        if(i.intensity){
            intensityNum += parseInt(i.intensity) 
        }
        if(i.likelihood){
            likelihoodNum += parseInt(i.likelihood)
        }
        if(i.relevance){
            relevanceNum += parseInt(i.relevance)
        }
    })
    return (
        <div className='widgest'>
             <div className="left">
               <span className='tittle'>{type?.tittle}</span>
               <span className='Counter'>{info==="country"?countryNum:info==="intensity"?intensityNum:info==="likelihood"?likelihoodNum:relevanceNum}</span>
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