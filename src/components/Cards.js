import React from 'react';
import '../themes/Cards.css';

const Cards = ({setScore}) => {
    return (
        <div>
            <section className="cardContainer"> 
                <button className="card" onClick={setScore}></button>
                <button className="card" onClick={setScore}></button>
                <button className="card" onClick={setScore}></button>
                <button className="card" onClick={setScore}></button>
                <button className="card" onClick={setScore}></button>
                <button className="card" onClick={setScore}></button>
                <button className="card" onClick={setScore}></button>
                <button className="card" onClick={setScore}></button>
                <button className="card" onClick={setScore}></button>
                <button className="card" onClick={setScore}></button>
                <button className="card" onClick={setScore}></button>
                <button className="card" onClick={setScore}></button>
            </section>
        </div>
    )
}

export default Cards;
