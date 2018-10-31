import React, { Component } from 'react';
import { handleResponse } from '../helpers';
import './App.css';
import Loading from '../common/Loading';
import Card from '../components/Card';
import API_KEY from '../config/api_key';
import { API_URL } from '../config/config';
// import Searchbox from './Searchbox';

const USERNAME = 'vamisola';
const PLATFORM = 'xb1';
const FORTNITE_KEY = API_KEY;
const FORTNITE_USERNAME = `${API_URL}${PLATFORM}/${USERNAME}`;
const FORTNITE_URL = FORTNITE_USERNAME+`?key=${FORTNITE_KEY}`;

class App extends Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      player: '',
      error: null,
      platform: '',
    };
  }

  componentDidMount() {
    this.setState({
      loading: true
    });
    
    fetch(FORTNITE_URL)
    .then(handleResponse)
    .then((data) => {
      console.log('Success', data);
      const player  = data;
      console.log('Player', player);
      this.setState({
        loading: false,
        // gamertag: .info.username,
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
      });
    })
    .catch((error) => {
      this.setState({error: error.message, loading: false});
    });
  }
  
  onSearchChange = (event) => {
    this.setState({
      searchfield: event.target.value
    })
  }

  render() {
    const { lifetimeWins, lifetimekd, lifetimeKills, soloWins, soloKills, solokd, duoWins, duoKills, duokd, squadWins, squadKills, squadkd, loading, error} = this.state;
    // const { gamertag, loading, error } = this.state;

    //render only lading component, if loading state is set to true
    if(loading){
        return <div className="loading-container"><Loading /></div>
    }
    //render only error message, if error occured white fetching data
    if(error){
        return <div className="error">{this.state.error}</div>
    }
    return (
      <div className='tc'>
          <h1 className='f1'> {USERNAME.toUpperCase()} 's Fornite Stats </h1>
          <div className='gamertag-header'>
            <h3 className='tc'>LIFETIME STAT</h3>
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
        {/* <Searchbox searchChange={this.onSearchChange}/> */}
        {/* <p>gamertag: {username}</p>
        <p>Solo Wins: {usernameSoloWins}</p>
        <p>k/d: {usernamekd}</p> */}
      </div>
    );
  }
}

export default App;
