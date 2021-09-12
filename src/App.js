import React, { useState } from 'react';
import './themes/App.css';
import Header from './components/Header';
import Score from './components/Score';
import Cards from './components/Cards';

function App() {
    const [score, setScore] = useState(0);

    return(
        <section className="appContainer">
            <section className="headerContainer">
                <Header />
                <Score score={score}/>
            </section>
            <section className="mainContainer">
                <Cards 
                    setScore={() => setScore(score + 1)} 
                    resetScore={() => setScore(score - score)}
                />
            </section>
        </section>
    );
}

export default App;
