import React from 'react';

const Display = (props) => {
    const {name,id,price}=props.cosmatic;
    return (
        <div>
            <h3>Name: {name}</h3>
            <p>id: {id}</p>
            <p>Price: {price}</p>
        </div>
    );
};

export default Display;