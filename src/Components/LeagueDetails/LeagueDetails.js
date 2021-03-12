import React, { useEffect, useState } from 'react';
import stadium from '../../images/stadium.jpg';
import Male from '../../images/male.png';
import Female from '../../images/female.png';
import { FontAwesomeIcon,} from '@fortawesome/react-fontawesome'
import { faFlag, faCheckCircle, faFutbol, faMars} from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faTwitter, faYoutube} from '@fortawesome/free-brands-svg-icons' 
import { useParams } from 'react-router';

const LeagueDetails = () => {
    const [leagueDetail, setLeagueDetail] =useState([]);
    const {leagueId} =useParams();
    useEffect(()=>{
        const url =`https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${leagueId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setLeagueDetail(data.leagues[0]))

    },[leagueId]) 
    let gender;
    if(leagueDetail.strGender==="Male"){
        gender= <img className="gender-image" src={Male} alt="Male team"/>
    }
    else{
        gender = <img className="gender-image" src={Female} alt="Male team"/>
    }
    return (
        <div style={{backgroundImage: `url(${stadium})`}} className="home-container">
            <div>
                <img className="league-badge pt-5" src={leagueDetail.strBadge} alt=" league logo"/>
            </div>
            <div className="league-details row d-flex align-items-center p-5 m-5">
                <div className="col-md-6 mb-3">
                <h3>{leagueDetail.strLeague}</h3>
                <h5> <FontAwesomeIcon icon= {faCheckCircle} />  Founded: {leagueDetail.intFormedYear}</h5>
                <h5><FontAwesomeIcon icon= {faFlag} />  Country: {leagueDetail.strCountry}</h5>
                <h5><FontAwesomeIcon icon= {faFutbol} /> Sport Type: {leagueDetail.strSport}</h5>
                <h5><FontAwesomeIcon icon= {faMars} /> Gender: {leagueDetail.strGender}</h5>
                </div>
                <div className="col-md-6 mb-5">
                {gender}  
                </div>        
            </div>
            <div>
                <p className="m-5 p-2">{leagueDetail.strDescriptionEN}</p>
            </div>
            <div className="d-flex justify-content-center m-5 p-2">
            <a href={`https://${leagueDetail.strTwitter}`} rel="noopener noreferrer" target="_blank"><FontAwesomeIcon className="w-25 h-50" icon= {faTwitter} /></a>
            <a href={`https://${leagueDetail.strFacebook}`} rel="noopener noreferrer" target="_blank"><FontAwesomeIcon className="w-25 h-50" icon= {faFacebook} /></a>
            <a href={`https://${leagueDetail.strYoutube}`} rel="noopener noreferrer" target="_blank"><FontAwesomeIcon className="w-25 h-50" icon= {faYoutube} /></a>

            </div>
            
        </div>
    );
};

export default LeagueDetails;