import React, { useState, useEffect } from 'react';
import '../themes/Cards.css';

const Cards = ({setScore}) => {
    const [randomArray, updateRandomArray] = useState([]);

    useEffect(() => {
        document.body.querySelector('.cardContainer').innerHTML = '';
        let newArray = [];
        for (let i = 0; i < 12; i++) {
            let randomNum = parseInt(Math.random() * 12 + 1);
            if (newArray.includes(randomNum)) {
                i -= 1;
            } else {
                newArray.push(randomNum)
            }
        }
        updateRandomArray(randomArray.concat(newArray));
    }, [setScore]);

    return (
        <section className="cardContainer">
            {randomArray.map((num) => {
                return <button className="card" onClick={setScore}>{num}</button>
            })}
        </section>
    );
}

export default Cards;
