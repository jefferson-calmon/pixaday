import React, { useEffect, useState } from 'react';

import HeaderOrderPizza from '../components/HeaderOrderPizza';
import { Pizza, setPizzaInStorage, getPizza, initialPizza } from '../utils/usePizza';
import Button from '../components/Button';

import imageToppingPepperoni from '../images/topping-pepperoni.jpg';
import imageToppingMushrooms from '../images/topping-mushrooms.jpg';
import imageToppingOnion from '../images/topping-onions.jpg';
import imageToppingSausage from '../images/topping-sausage.jpg';
import imageToppingBacon from '../images/topping-bacon.jpg';
import imageToppingCheese from '../images/topping-cheese.jpg';
import imageToppingBlackOlives from '../images/topping-black-olives.jpg';
import imageToppingGreenPeppers from '../images/topping-green-peppers.jpg';
import imageToppingPineapple from '../images/topping-pineapple.jpg';
import imageToppingSpinach from '../images/topping-spinach.jpg';

import '../styles/pages/choose-toppings.css'
import Topping from '../components/Topping';

interface ToppingProps {
    name: string,
}

const ChooseToppings = () => {
    let [ pizza, setPizza ] = useState<Pizza>(initialPizza);

    const [ numberToppings, setNumberToppings ] = useState(0);
    
    useEffect(() => {
        const storagePizza = getPizza();

        setPizza(storagePizza);
    }, []);

    useEffect(() => {
        const sizePizza = pizza.size.name;
        switch (sizePizza) {
            case 'small' :
                setNumberToppings(5);
                break
            case 'medium' :
                setNumberToppings(7);
                break
            case 'large' :
                setNumberToppings(9);
                break
        }
    }, [pizza])

    useEffect(() => {
        setPizzaInStorage(pizza);
    }, [pizza])

    function handleToggleTopping(id: string) {
        // Create a topping object with the string of the id element
        const toppingName = id.split('-').join(' ');
        const topping = {
            name: toppingName.replace(/^\w/, (c) => c.toUpperCase())
        }

        console.log(topping)

        const isValid = pizza.toppings.find( pizzaTopping => pizzaTopping.name === topping.name );
        
        const element = document.getElementById(id);

        if (!isValid) {
            handleAddTopping(topping, element);
        } else {
            handleRemoveTopping(topping, element);
        }
    }

    function handleAddTopping(topping: ToppingProps, element: HTMLElement | null) {
        if ( (pizza.toppings.length) === numberToppings ) return alert('You cannot add more toppings!');

        element?.classList.add('active');

        if (pizza.toppings.length + 1 === 3) handleToggleMessage();

        const newToppings = pizza.toppings.slice();
        newToppings.push(topping);

        const newPizza = { ...pizza, toppings: newToppings}

        setPizza(newPizza);
    }

    function handleRemoveTopping(topping: ToppingProps, element: HTMLElement | null) {
        
        element?.classList.remove('active');

        const newToppings = pizza.toppings.filter( pizzaTopping => topping.name !== pizzaTopping.name );

        const newPizza = { ...pizza, toppings: newToppings}

        setPizza(newPizza);
    }

    function handleToggleMessage() {
        const message = document.getElementById('message');
        const response = localStorage.getItem('show_message');

        if (response) return { close };

        message?.classList.add('active');
        localStorage.setItem('show_message', JSON.stringify(false));

        function close() {message?.classList.remove('active');}
    }

    return (
        <section id="choose-toppings">
            <div className="shadow"></div>
            <div id="message">
                <div>
                    <h1>Warning</h1>

                    <p>
                        You may choose [0-3] ingredients from the list without any additional cost for the pizza, but you can add more four ingredients with cost the $0.50 each.
                    </p>

                    <button onClick={() => handleToggleMessage()?.close()}>
                        Continuar
                    </button>
                </div>
            </div>

            <HeaderOrderPizza />

            <main>
                <div className="content">
                    <h1>Please choose the toppings for your pizza</h1>
    
                    <div className="grid-toppings-pizza">

                        <Topping 
                            topping="Pepperoni"
                            image={imageToppingPepperoni}
                            function={handleToggleTopping}
                        />

                        <Topping 
                            topping="Mushrooms"
                            image={imageToppingMushrooms}
                            function={handleToggleTopping}
                        />

                        <Topping 
                            topping="Onions"
                            image={imageToppingOnion}
                            function={handleToggleTopping}
                        />

                        <Topping 
                            topping="Sausage"
                            image={imageToppingSausage}
                            function={handleToggleTopping}
                        />

                        <Topping 
                            topping="Bacon"
                            image={imageToppingBacon}
                            function={handleToggleTopping}
                        />

                        <Topping 
                            topping="Extra cheese"
                            image={imageToppingCheese}
                            function={handleToggleTopping}
                        />

                        <Topping 
                            topping="Black olives"
                            image={imageToppingBlackOlives}
                            function={handleToggleTopping}
                        />

                        <Topping 
                            topping="Green peppers"
                            image={imageToppingGreenPeppers}
                            function={handleToggleTopping}
                        />

                        <Topping 
                            topping="Pineapple"
                            image={imageToppingPineapple}
                            function={handleToggleTopping}
                        />

                        <Topping 
                            topping="Spinach"
                            image={imageToppingSpinach}
                            function={handleToggleTopping}
                        />

                    </div>

                    <Button 
                        to="/confirmation"
                        label="Confirmation"
                    />
                </div>
            </main>
        </section>
    );
}

export default ChooseToppings;