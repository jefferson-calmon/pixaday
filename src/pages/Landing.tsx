import React, { useEffect } from 'react';

import Button from '../components/Button';
import { initialPizza, setPizzaInStorage } from '../utils/usePizza';

import '../styles/pages/landing.css';

const Landing = () => {

    useEffect(() => {
        const existPizza = localStorage.getItem('pizza');

        if (existPizza) return;

        setPizzaInStorage(initialPizza);
    }, [])

    return (
        <section id="banner">
          <div className="shadow"></div>
  
            <header id="top">
                <div className="content">
    
                <h1 className="logo">
                    <a href="/">
                    Pizzaday
                    </a>
                </h1>
    
                <nav id="navigation">
                    <ul>
                    <li><a href="#about">About us</a></li>
                    <li><a href="#contact">Contact</a></li>
                    <li><a href="#pricing">Pricing</a></li>
                    <li>
                        <Button to="/choose-size" label="Learn More"/>
                    </li>
                    </ul>
                </nav>
                </div>
            </header>
  
            <main>
                <div className="content">
                    <div className="text">
                        <h1>The best pizza in the world</h1>
    
                        <p>
                            Our pizzeria is proud to know that we have the most delicious pizza in the world. We do our best to please our customers.
                        </p>
                        
                        <Button to="/choose-size" label="Experiment Now"/>
                    </div>
                </div>
            </main>
  
        </section>
    );
}

export default Landing;