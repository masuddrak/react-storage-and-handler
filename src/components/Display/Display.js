import React from 'react';
import { addStorage} from '../../ustilitis/localstorage';

const Display = (props) => {
    const {name,id,price}=props.cosmatic;
    const addToCard=(id)=>{
        addStorage(id);
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