// IMPORTS
import React from 'react';

// COMPONENT
const Button = ({ className, label, onClick }) => {
    return (
        <button className={className} onClick={onClick}>{label}</button>
    );
}


// EXPORT
export default Button;