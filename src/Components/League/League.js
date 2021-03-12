import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { Link} from 'react-router-dom';

const League = (props) => {
    const{strLeague,strSport, idLeague} = props.league;
    const [leagueCard, setLeaguecard] = useState([])
    useEffect(()=>{
        const url =`https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${idLeague}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setLeaguecard(data.leagues[0]))

    },[idLeague])
   
    return (
        <div>
            <div className="card h-100 shadow rounded m-3">
            <img class="bg-light mt-3 w-50" src={leagueCard.strBadge} class="card-img-top card-image ml-auto mr-auto" alt="league image"/>

                        <div className="card-body ml-auto mr-auto">
                            <h4 className="card-title text-highlight">{strLeague}</h4>
                            <p className="card-text">Sports type: {strSport}</p>
                            <Link to={`/league/${idLeague}`}>
                            <button className="btn btn-primary p-2  ">
                           <strong> Explore    </strong>
                           <FontAwesomeIcon icon= {faArrowRight} />
                            </button>
                            </Link>
                        </div>
                    </div>
        </div>
    );
};

export default League;