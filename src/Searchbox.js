import React from 'react';

const Searchbox = ({searchfield, searchChange}) => {
    return (
        <div>
            <input type = "search" placeholder="type gamertag" onChange = {searchChange} />
            <input type="radio" name="platform" value="xb1" /> Xbox One
            <input type="radio" name="platform" value="ps4" /> PS4
            <input type="radio" name="platform" value="pc" /> PC
        </div>
    );
}

export default Searchbox;
