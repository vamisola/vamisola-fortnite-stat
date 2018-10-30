import React from 'react';

const Card = ({wins, kills, win_percent, kd}) => {
    return (
        <div className='pa2 ma2 bw2 shaddow-5'>
            <div>
                <p>WINS: {wins}</p>
                <p>KILLS: {kills}</p>
                <p>K/D: {kd}</p>
            </div>
        </div>
    );
}

export default Card;