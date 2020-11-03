import React, { useEffect, useState } from 'react';
import { FaCheckCircle } from 'react-icons/fa';

import '../styles/components/topping.css';
import { getPizza, initialPizza, Pizza } from '../utils/usePizza';

interface ToppingProps {
    topping: string,
    image: string,
    function: Function,
}

const Topping = (props: ToppingProps) => {
    const [ id, setId ] = useState('')
    const [ pizza, setPizza ] = useState<Pizza>(initialPizza);
    const { topping, image } = props;

    useEffect(() => {
        const newPizza = getPizza();

        setPizza(newPizza)
    }, [])

    useEffect(() => {
        const splitedTopping = topping.split(' ');

        const newId = splitedTopping.length > 1 ? (
            splitedTopping.join('-').toLowerCase()
        ) : (
            splitedTopping.join('').toLowerCase()
        )

        setId(newId)
    }, [topping])

    // if (!pizza) return;

    return(
        <div 
            id={id} 
            className={`
                box-topping-pizza 
                ${ pizza.toppings.find( pizzaTopping => (
                    pizzaTopping.name === topping
                ) ) && 'active' }
            `} 
            onClick={() => props.function(id)}
        >
            <FaCheckCircle 
                className='icon-checked' 
                size="2.35479vw" 
                color="var(--secundary)"
            />
            <img src={image} className="image-topping" alt="Pizzaday"/>
            <div className="shadow-topping">
                <h2>{topping}</h2>
            </div>
            
        </div>
    );
}

export default Topping;