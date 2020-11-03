import React from 'react';
import { FiArrowLeft } from 'react-icons/fi'
import { useHistory } from 'react-router-dom';

import '../styles/components/header-order-pizza.css';

interface HeaderProps {
    background?: string,
}

const HeaderOrderPizza = ({ background }: HeaderProps) => {
    const history = useHistory();

    return (
        <header id="top-order-pizza" style={{ background: background ? background : 'transparent', }}>
            <div className="content">
                <div 
                    className="back-page"
                    onClick={() => history.goBack()}
                >
                    <FiArrowLeft fontSize="1.96232vw" color="var(--white)" />
                    <span>to back</span>
                </div>
            </div>
        </header>
    );
}

export default HeaderOrderPizza;