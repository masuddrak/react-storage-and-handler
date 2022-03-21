import React from 'react';

const Display = (props) => {
    const {name,id,price}=props.cosmatic;
    const addToCard=(id)=>{
        console.log(id)
    }
    return (
        <div>
            <h3>Name: {name}</h3>
            <p>id: {id}</p>
            <p>Price: {price}</p>
            <button onClick={()=>addToCard(id)}>Ad to Card</button>
        </div>
    );
};

export default Display;