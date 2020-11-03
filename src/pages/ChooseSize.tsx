import React, { useEffect, useState } from 'react';
import { FaCheckCircle } from 'react-icons/fa';
// import { motion } from 'framer-motion';

import HeaderOrderPizza from '../components/HeaderOrderPizza';
import Button from '../components/Button';
import { Pizza, setPizzaInStorage, getPizza, initialPizza } from '../utils/usePizza';

import imagePizza from '../images/pizza-size.png';

import '../styles/pages/choose-size.css';

const ChooseSize = () => {
    let [ pizza, setPizza ] = useState<Pizza>(initialPizza);
    
    useEffect(() => {
        const storagePizza = getPizza();

        setPizza(storagePizza);
    }, []);

    useEffect(() => {
        setPizzaInStorage(pizza)
    }, [pizza])

    return (
        <section id="choose-size">
            <div className="shadow"></div>

            <HeaderOrderPizza />

            <main>
                <div className="content">
                    <h1>Choose the size of the pizza</h1>

                    <div className="grid-sizes-pizza">
                        
                        <div 
                            className={`box-size-pizza ${pizza.size.name === 'small' && 'active'}`}
                            onClick={() => setPizza({ 
                                ...pizza, 
                                size: { name: 'small', cost: 8,  }
                            })}
                        >
                            <FaCheckCircle 
                                className={`icon-checked ${pizza.size.name === 'small' && 'active'}`} 
                                size="2.35479vw" 
                                color="var(--secundary)"
                            />

                            <div className="image-pizza">
                                <img src={imagePizza} alt="Pizzaday" className="small"/>
                            </div>
                            <div className="cost-pizza">
                                <h2>Small</h2>
                                <span>$8</span>
                            </div>
                        </div >

                        <div 
                            className={`box-size-pizza ${pizza.size.name === 'medium' && 'active'}`}
                            onClick={() => setPizza({ 
                                ...pizza, 
                                size: { name: 'medium', cost: 10,  }
                            })}
                        >
                            <FaCheckCircle 
                                className={`icon-checked ${pizza.size.name === 'medium' && 'active'}`} 
                                size="2.35479vw" 
                                color="var(--secundary)"
                            />

                            <div className="image-pizza">
                                <img src={imagePizza} alt="Pizzaday" className="medium"/>
                            </div>
                            <div className="cost-pizza">
                                <h2>Medium</h2>
                                <span>$10</span>
                            </div>
                        </div>

                        <div 
                            className={`box-size-pizza ${pizza.size.name === 'large' && 'active'}`}
                            onClick={() => setPizza({ 
                                ...pizza, 
                                size: { name: 'large', cost: 12 }
                            })}
                        >
                            <FaCheckCircle 
                                className={`icon-checked ${pizza.size.name === 'large' && 'active'}`} 
                                size="2.35479vw" 
                                color="var(--secundary)"
                            />

                            <div className="image-pizza">
                                <img src={imagePizza} alt="Pizzaday"/>
                            </div>
                            <div className="cost-pizza">
                                <h2>Large</h2>
                                <span>$12</span>
                            </div>
                        </div>
                    </div>

                    <Button 
                        to={`/choose-crust`} 
                        label="Continue"
                    />
                </div>
            </main>
        </section>
    );
}

export default ChooseSize;