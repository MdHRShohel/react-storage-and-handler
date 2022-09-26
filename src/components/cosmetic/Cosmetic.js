import React from 'react';

const Cosmetic = (props) => {
    const {id,name,price} = props.cosmetic;
    return (
        <div>
            <h2>Buy This: {name}</h2>
            <p>Only for: {price}$</p>
            <p>Product id: {id}</p>
        </div>
    );
};

export default Cosmetic;