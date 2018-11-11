import React from 'react';
import Card from '../components/Card';
const gamerstats = ({player, lifetimeWins, lifetimeKills, lifetimekd, soloWins, soloKills, solokd, duoWins, duoKills, duokd, squadWins, squadKills, squadkd}) => {
  return(
    <div>
      <h1 className='f1'> {player} 's Fortnite Stats </h1>
      <div className='gamertag-header'>
        <h2 className='tc'>LIFETIME STATS</h2>
        <h3><span className="label">Wins: {lifetimeWins} </span><span className="label">Kills: {lifetimeKills} </span><span className="label">K/D: {lifetimekd}</span></h3>
      </div>
      <div className="dt-ns dt--fixed-ns">
        <div className="dtc-ns tc pv4 bg-black-10">
          <h3 className="bg-light-purple light-blue pa3 ma3" >SOLOS</h3>
          <Card
            wins={soloWins}
            kills={soloKills}
            kd={solokd}
          />
        </div>
        <div className="dtc-ns tc pv4 bg-black-05">
          <h3 className="bg-dark-pink light-blue pa3 ma3">DUOS</h3>
          <Card
            wins={duoWins}
            kills={duoKills}
            kd={duokd}
          />
        </div>
        <div className="dtc-ns tc pv4 bg-black-10">
          <h3 className="bg-dark-blue light-blue pa3 ma3">SQUADS</h3>
          <Card
            wins={squadWins}
            kills={squadKills}
            kd={squadkd}
          />
        </div>
      </div>
    </div>
  );
}

export default gamerstats;
