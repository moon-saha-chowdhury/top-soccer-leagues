import React, { useEffect, useState } from 'react';
import stadium from '../../images/stadium.jpg';
import League from '../League/League';
import './Home.css';


const Home = () => {
    const [leagues, setLeagues] = useState([]);
    useEffect(()=>{
        const url='https://www.thesportsdb.com/api/v1/json/1/all_leagues.php';
        fetch(url)
        .then(res => res.json())
        .then(data => setLeagues(data.leagues.slice(0,9)))
    },[])
    return (
            <div style={{backgroundImage: `url(${stadium})`}} className="home-container">
            <div className="text-center">
            <h1>Top Soccer League of 2020</h1>
            </div>
            <div className="row row-cols-1 row-cols-md-3 g-4 card-container m-3 "> 
            {
                leagues.map(league => <div className="col card-bg"><League league={league}></League></div>)
            }
            </div>
       </div>
    );
};

export default Home;