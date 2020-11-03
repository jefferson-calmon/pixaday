import React, { useEffect, useState } from 'react';
import { FaCheckCircle } from 'react-icons/fa';

import HeaderOrderPizza from '../components/HeaderOrderPizza';
import Button from '../components/Button';
import { Pizza, setPizzaInStorage, getPizza, initialPizza } from '../utils/usePizza';

import imagePizzaCrustThin from '../images/pizza-crust-thin.png';
import imagePizzaCrustThick from '../images/pizza-crust-thick.png';

import '../styles/pages/choose-crust.css';

const ChooseCrust = () => {
    let [ pizza, setPizza ] = useState<Pizza>(initialPizza);
    
    useEffect(() => {
        const storagePizza = getPizza();

        setPizza(storagePizza);
    }, []);

    useEffect(() => {
        setPizzaInStorage(pizza);
    }, [pizza])

    return (
        <section id="choose-crust">
            <div className="shadow"></div>
            <HeaderOrderPizza />

            <main>
                <div className="content">
                    <h1>Now choose the crust</h1>

                    <div className="grid-crusts-pizza">
                        
                        <div 
                            className={`box-crust-pizza ${pizza.crust.name === 'thin' && 'active'}`}
                            onClick={() => setPizza({ 
                                ...pizza, 
                                crust: { name: 'thin', cost: 2,  }
                            })}
                        >
                            <FaCheckCircle 
                                className={`icon-checked ${pizza.crust.name === 'thin' && 'active'}`} 
                                fontSize="2.35479vw" 
                                color="var(--secundary)"
                            />

                            <div className="image-crust">
                                <img src={imagePizzaCrustThin} alt="Pizzaday" className="thin"/>
                            </div>
                            <div className="extra-cost">
                                <h2>Thin</h2>
                                <span>+$2</span>
                            </div>
                        </div>
                        
                        <div 
                            className={`box-crust-pizza ${pizza.crust.name === 'thick' && 'active'}`}
                            onClick={() => setPizza({ 
                                ...pizza, 
                                crust: { name: 'thick', cost: 2,  }
                            })}
                        >
                            <FaCheckCircle 
                                className={`icon-checked ${pizza.crust.name === 'thick' && 'active'}`} 
                                size="30px" 
                                color="var(--secundary)"
                            />

                            <div className="image-crust">
                                <img src={imagePizzaCrustThick} alt="Pizzaday" className="thick"/>
                            </div>
                            <div className="extra-cost">
                                <h2>Thick</h2>
                                <span>+$4</span>
                            </div>
                        </div>
                    </div>

                    <Button 
                        to="/choose-toppings"
                        label="Continue"
                    />
                </div>
            </main>
        </section>
    );
}

export default ChooseCrust;