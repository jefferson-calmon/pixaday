import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/components/button.css';

interface ButtonProps {
    label: string;
    to: string;
    outline?: boolean;
}

const Button = ( props: ButtonProps ) => {
    const outline = {
        backgroundColor: props.outline ? 'transparent' : 'var(--primary)',
        color: props.outline ? 'var(--primary)' : 'var(--white)',
    }

    return (
        <Link to={props.to} className="button" style={outline}>
            {props.label}
        </Link>
    );
}

export default Button;