import React, { useEffect } from 'react';
import '../themes/Cards.css';

const Cards = ({setScore}) => {
    const cardArray = [1,2,3,4,5,6,7,8,9,10,11,12];

    let updatedArray = [1,2,3,4,5,6,7,8,9,10,11,12];
    useEffect(function randomiseCards() {
        updatedArray = [];
        for (let i = 0; i < 12; i++) {
            let randomNum = parseInt(Math.random() * 12);
            if (updatedArray.includes(cardArray[randomNum])) {
                i -= 1;
            } else {
                updatedArray.push(cardArray[randomNum])
            }
        }
        console.log(updatedArray);
    });

    return (
        <div>
            <section className="cardContainer"> 
                {updatedArray.map((card) => {
                    return <button className="card" onClick={setScore}>{card}</button>;
                })}
            </section>
        </div>
    );
}

export default Cards;
