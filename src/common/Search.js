import React from 'react';
import { handleResponse } from '../helpers';
import './Search.css';
import Loading from '../common/Loading';
import API_KEY from '../config/api_key';
import { API_URL } from '../config/config';


// const USERNAME = 'vamisola';
const PLATFORM = 'xb1';
const FORTNITE_KEY = API_KEY;
// const FORTNITE_USERNAME = `${API_URL}${PLATFORM}/${USERNAME}`;
// const FORTNITE_URL = FORTNITE_USERNAME + `?key=${FORTNITE_KEY}`;


class Search extends React.Component {
    constructor(){
        super();

        this.state = {
            searchResults: [],
            searchQuery: '',
            loading: false,
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleDirect = this.handleDirect.bind(this);
    }

    handleChange(event){
        const searchQuery = event.target.value;

        this.setState({ searchQuery });

        if(!searchQuery) {
            return '';
        }

        this.setState({  loading: true});
    

    fetch(`${API_URL}${PLATFORM}/${searchQuery}?key=${FORTNITE_KEY}`)
        .then(handleResponse)
        .then((result) => {
            console.log('Success', result);
            const player = result;
            console.log('Player', player);
            console.log(searchQuery);
            this.setState({
                loading: false,
                searchResults: result,
                // gamertag: .info.username,
                lifetimeWins: result.lifetimeStats.wins,
                lifetimekd: result.lifetimeStats['k/d'],
                lifetimeKills: result.lifetimeStats.kills,
                soloWins: result.group.solo.wins,
                solokd: result.group.solo['k/d'],
                soloKills: result.group.solo.kills,
                duoWins: result.group.duo.wins,
                duokd: result.group.duo['k/d'],
                duoKills: result.group.duo.kills,
                squadWins: result.group.squad.wins,
                squadkd: result.group.squad['k/d'],
                squadKills: result.group.squad.kills,
            });
        })   
    }
    handleDirect(playerId){
        this.setState({
            searchQuery: '',
            searchResults: []
        });
        // this.props.history.push()
    }

    renderSearchResults() {
        const { searchResults, lifetimeWins, searchQuery, loading } = this.state;

        if(!searchQuery){
            return '';
        }

        if(searchResults.length > 0) {
            return (
                <div className="search-result-container">
                    LifetimeWins = {lifetimeWins}
                </div>
            )
        }
        if(!loading) {
            return(
                <div className="Search-result-container">
                    <div className="Search-no-result">
                        No results found.
                    </div>
                </div>
            )
        }
    }
    render(){
        const {loading, searchQuery} = this.state;
        return (
            <div className="Search">
                <span className="Search-icon" />
                <input 
                    className="Search-input"
                    placeholder="gamertag"
                    type="text"
                    onChange={this.handleChange}
                    value={searchQuery}
                />
                {loading &&
                    <div className="Searcg=h-loading">
                        <Loading
                            width='12px'
                            height='12px'
                        />
                    </div>}
                    {this.renderSearchResults()
                }
            </div>
        )
    }
}



export default Search;