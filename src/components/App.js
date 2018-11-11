import React, { Component } from 'react';
import { handleResponse } from '../helpers';
import './App.css';
import Loading from '../common/Loading';
import Card from '../components/Card';
import Header from '../common/Header';
import API_KEY from '../config/api_key';
import { API_URL } from '../config/config';
import GamerStats from '../components/GamerStats';
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
      player: 'vamisola',
      platform: 'xb1',
      error: null,
    };
  }

  componentDidMount() {
    this.setState({
      loading: true
    });

    fetch(FORTNITE_URL,{headers: {'Access-Control-Allow-Origin': '*'}})
    .then(handleResponse)
    .then((data) => {
      console.log('Success', data);
      this.setState({
        loading: false,
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
    const { player, lifetimeWins, lifetimekd, lifetimeKills, soloWins, soloKills, solokd, duoWins, duoKills, duokd, squadWins, squadKills, squadkd, loading, error} = this.state;
    // const { gamertag, loading, error } = this.state;

    //render only lading component, if loading state is set to true
    if(loading){
        return <div className="loading-container"><Loading /></div>
    }
    //render only error message, if error occured white fetching data
    if(error){
        return <div className="error">{error}</div>
    }
    return (
      <div className='tc'>
        <Header/>
        <GamerStats
          player = {player}
          lifetimeWins = {lifetimeWins}
          lifetimeKills = {lifetimeKills}
          lifetimekd = {lifetimekd}
          soloWins = {soloWins}
          soloKills = {soloKills}
          solokd ={solokd}
          duoWins = {duoWins}
          duoKills = {duoKills}
          duokd = {duokd}
          squadWins = {squadWins}
          squadKills = {squadKills}
          squadkd = {squadkd}
          />
          
      </div>
    );
  }
}

export default App;
