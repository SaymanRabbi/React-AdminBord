import axios from "axios";
import { useQuery } from 'react-query';
import Navbar from '../../Components/Navbar/Navbar';
import Sidebar from '../../Components/sidebar/Sidebar';
import Widgest from '../../Components/widgets/Widgest';
import './Home.scss';
const Home = () => {
    const fetchUser = async () => {
        const response = await axios.get(
          "http://localhost:5000/api/v1/getAlldata"
        );
        return response.data;
      };
    const {data:alldata,isLoading,error} = useQuery('user',fetchUser)
    if(isLoading){
        return <h1>Loading...</h1>
    }
    console.log(alldata);
    return (
        <div className='home'>
            <Sidebar/>
            <div className="homeContainer">
                <Navbar/>
                <div className="widgets">
                    <Widgest/>
                    <Widgest/>
                    <Widgest/>
                    <Widgest/>
                </div>
            </div>
        </div>
    );
};

export default Home;