import { ChangeCircle, Compare, Flag, Speed } from "@mui/icons-material";
import { LinearProgress } from "@mui/material";
import axios from "axios";
import { useState } from "react";
import { useQuery } from 'react-query';
import Chart from "../../Components/Chart/Chart";
import Featured from "../../Components/Featured/Featured";
import Navbar from '../../Components/Navbar/Navbar';
import Sidebar from '../../Components/sidebar/Sidebar';
import Widgest from '../../Components/widgets/Widgest';
import './Home.scss';
const Home = () => {
    let countryNum = 0
    let intensityNum = 0
    let likelihoodNum = 0
    let relevanceNum = 0
    const [intensity, setIntensity] = useState({
        tittle: 'Intensity',
        money:true,
        icon:<Speed className="icon"
        style={{color:'goldenrod',backgroundColor:'rgba(218,165,32,.2)'}}
        />,
        link:'See All Intensity'
    });
    const [likelihood, setLikelihood] = useState({
        tittle: 'Likelihood',
        money:true,
        icon:<ChangeCircle className="icon"
        style={{color:'green',backgroundColor:'rgba(0,128,0,.2)'}}
        />,
        link:'See All Likelihood'
    })
    const [country, setCountry] = useState({
        tittle: 'Country',
        money:false,
        icon:<Flag className="icon"
        style={{color:'crimson',backgroundColor:'rgba(255,0,0,.2)'}}
        />,
        link:'See All Country'
    })
    const [relevance, setRelevance] = useState({
        tittle: 'Relevance',
        money:true,
        icon:<Compare className="icon"
        style={{color:'purpel',backgroundColor:'rgba(128,0,128,.2)'}}
        />,
        link:'See All Relevance'
    })
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
        <div className='home'>
            <Sidebar/>
            <div className="homeContainer">
                <Navbar/>
                <div className="widgets">
                    <Widgest type={country} total={countryNum}/>
                    <Widgest type={intensity} total={intensityNum}/>
                    <Widgest type={likelihood} total={likelihoodNum}/>
                    <Widgest type={relevance} total={relevanceNum}/>
                </div>
                <div className="charts">
                    <Featured country={countryNum} intensity={intensityNum}/>
                    <Chart data={alldata}/>
                </div>
            </div>
        </div>
    );
};

export default Home;