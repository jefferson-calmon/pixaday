import React, { useEffect, useState } from 'react';

import { getPizza, initialPizza, Pizza, resetPizza } from '../utils/usePizza';
import HeaderOrderPizza from '../components/HeaderOrderPizza';
import Button from '../components/Button';

import '../styles/pages/confirmation.css';

const Confirmation = () => {
    let [ pizza, setPizza ] = useState<Pizza>(initialPizza);
    let [ totalCost, setTotalCost ] = useState(0);
    
    useEffect(() => {
        const storagePizza = getPizza();

        setPizza(storagePizza);
    }, []);

    useEffect(() => {
        const costToppings = pizza.toppings.length >= 3 ? (pizza.toppings.length - 3) * 0.5 : 0;
        const costSize = pizza.size.cost;
        const costCrust = pizza.crust.cost;

        const total = costToppings + costSize + costCrust;
        setTotalCost(total);
    }, [pizza])

    return (
        <section id="confirmation">
            {/* <div id="particles"><ParticlesPizza /></div> */}
            <HeaderOrderPizza background="var(--primary)" />

            <main>
                <div className="content">
                    <h1>Check your custom pizza</h1>

                    <div className="lineBox">
                        <span>Size </span>
                        <span>{pizza.size.name}</span>
                        <span>${pizza.size.cost}</span>
                    </div>

                    <div className="lineBox">
                        <span>Crust </span>
                        <span>{pizza.crust.name}</span>
                        <span>${pizza.crust.cost}</span>
                    </div>

                    <div className="lineBox">
                        <span>Toppings </span>
                        <div>
                            {
                                pizza.toppings.map( topping => (
                                    <span key={topping.name}>
                                        {topping.name}
                                    </span>
                                ) )
                            }
                        </div>
                        <div>
                            {
                                pizza.toppings.map( ( topping, index ) => {
                                    return index >= 3 ? (
                                        <span key={topping.name}>
                                            $0.50
                                        </span>
                                    ) : (
                                        <span key={topping.name}>
                                            -
                                        </span>
                                    )
                                } )
                            }
                        </div>
                    </div>

                    <div className="lineBox">
                        <span>Total</span>
                        <span> </span>
                        <span>${totalCost}</span>
                    </div>

                    <div className="reset" onClick={() => {
                        resetPizza()
                        alert('Thanks, your order pizza is confirmed!')
                    }}>
                        <Button 
                            to="/"
                            label="Confirm"
                        />
                    </div>
                </div>
            </main>
        </section>
    );
}

export default Confirmation;