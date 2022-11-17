import { ChangeCircle, Compare, Flag, Speed } from "@mui/icons-material";

import { useState } from "react";

import Navbar from '../../Components/Navbar/Navbar';
import Sidebar from '../../Components/sidebar/Sidebar';
import Widgest from '../../Components/widgets/Widgest';
import './Home.scss';
const Home = () => {
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
  
    return (
        <div className='home'>
            <Sidebar/>
            <div className="homeContainer">
                <Navbar/>
                <div className="widgets">
                    <Widgest type={country} info="country"/>
                    <Widgest type={intensity} info="intensity"/>
                    <Widgest type={likelihood} info="likelihood"/>
                    <Widgest type={relevance} info="relevance"/>
                </div>
            </div>
        </div>
    );
};

export default Home;