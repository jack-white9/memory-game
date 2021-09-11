import React from 'react';
import '../themes/Score.css';

const Score = ({score}) => {
    return (
        <section className="scoreContainer">
            <p className="score">Score: {score}</p>
        </section>
    )
}

export default Score;
