import React, { useState, useEffect } from 'react';
import '../themes/Cards.css';

let clickedNums = []; // This global variable is a really ugly code smell but it was the only way to make the clickedNums stop emptying on each click. Revise later.

const Cards = ({setScore, resetScore}) => {
    const [randomArray, updateRandomArray] = useState([]);
    
    function checkPrevClick(card) {
        if (clickedNums.includes(card.target.textContent)) {
            resetScore();
            clickedNums = [];
        } else {
            clickedNums.push(card.target.textContent);
        }
    }

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
                return <button 
                            className="card" 
                            onClick={(card) => {
                                setScore();
                                checkPrevClick(card);
                            }}
                        >{num}</button>
            })}
        </section>
    );
}

export default Cards;
