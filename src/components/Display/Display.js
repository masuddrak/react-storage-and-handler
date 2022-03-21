import React from 'react';

const Display = (props) => {
    const {name,id}=props.cosmatic;
    return (
        <div>
            <h1>Product Name:{id}</h1>
        </div>
    );
};

export default Display;