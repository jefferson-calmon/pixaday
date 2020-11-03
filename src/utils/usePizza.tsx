export interface  Pizza {
    size: {
        name: string,
        cost: number,
    },
    crust: {
        name: string,
        cost: number,
    },
    toppings: {
        name: string,
    }[],
}

export const initialPizza = {
    size: {
        name: 'medium',
        cost: 10,
    },
    crust: {
        name: 'thick',
        cost: 4,
    },
    toppings: [],
}

export function getPizza() {
    const storagePizza = localStorage.getItem('pizza');

    if (!storagePizza) return;

    return JSON.parse(storagePizza);
}

export function setPizzaInStorage(pizza: Pizza) {
    return localStorage.setItem('pizza', JSON.stringify(pizza));
}

export function resetPizza(){
    return localStorage.removeItem('pizza');
}