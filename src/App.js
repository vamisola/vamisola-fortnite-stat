import React, { Component } from 'react';
import './App.css';
import Card from './Card';
import API_KEY from './config/api_key'
// import Searchbox from './Searchbox';

const USERNAME = 'vamisola';
const PLATFORM = 'xb1';
const FORTNITE_KEY = API_KEY;
// const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InZhbWlzb2xhQGdtYWlsLmNvbSIsInVzZXJJZCI6IjViZDEzMGMyZmYyYWZhMTZlNjgwOTljMiJ9.fHlaEvhpr_wsjMA5lyhPIdbO3_ffYF8er9MVwlGCTPU';
const FORTNITE_USERNAME = `https://fortnite-api.tresmos.xyz/profile/${PLATFORM}/${USERNAME}`;
const FORTNITE_URL = FORTNITE_USERNAME+`?key=${FORTNITE_KEY}`;
class App extends Component {
  constructor() {
    super();
    this.state = {
      gamertag: '',
      platform: '',
    }
  }

  componentDidMount() {
    fetch(FORTNITE_URL)
    .then(response => response.json())
    .then((data) => {
      this.setState({
        gamertag: data.info.username,
        lifetimeWins: data.lifetimeStats.wins,
        lifetimekd: data.lifetimeStats['k/d'],
        lifetimeKills: data.lifetimeStats.kills,
        soloWins: data.group.solo.wins,
        solokd: data.group.solo['k/d'],
        soloKills: data.group.solo.kills,
        duoWins: data.group.duo.wins,
        duokd: data.group.duo['k/d'],
        duoKills: data.group.duo.kills,
        squadWins: data.group.squad.wins,
        squadkd: data.group.squad['k/d'],
        squadKills: data.group.squad.kills,  
      })
    })
  }
  
  onSearchChange = (event) => {
    this.setState({
      searchfield: event.target.value
    })
  }

  render() {
    const { gamertag, lifetimeWins, lifetimekd, lifetimeKills, soloWins, soloKills, solokd, duoWins, duoKills, duokd, squadWins, squadKills, squadkd} = this.state;
    return (
      <div className='tc'>
          <h1 className='f1'> {gamertag.toUpperCase()}'s Fornite Stats </h1>
          <h3 className='tc'>LIFETIME STATS =====> Wins: {lifetimeWins} Kills: {lifetimeKills} K/D: {lifetimekd}</h3>
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
        {/* <Searchbox searchChange={this.onSearchChange}/> */}
        {/* <p>gamertag: {username}</p>
        <p>Solo Wins: {usernameSoloWins}</p>
        <p>k/d: {usernamekd}</p> */}
      </div>
    );
  }
}

export default App;
