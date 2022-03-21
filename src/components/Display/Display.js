import React from 'react';
import { addStorage, removProduct} from '../../ustilitis/localstorage';


const Display = (props) => {
    const {name,id,price}=props.cosmatic;

    const addToCard=(id)=>{
        addStorage(id)
    }
    const romoveToCard=(id)=>{
      removProduct(id)
    }
    
    return (
        <div>
            <h3>Name: {name}</h3>
            <p>id: {id}</p>
            <p>Price: {price}</p>
            <button onClick={()=>addToCard(id)}>Ad to Card</button>
            <button onClick={()=>romoveToCard(id)}>Delete to Card</button>
            
        </div>
    );
};

export default Display;