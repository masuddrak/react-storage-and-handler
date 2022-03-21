import React from 'react';
import { add, multiplay } from '../../ustilitis/calculate';


const Cosmatics = () => {
    const total=add(10,12)
    const multipay=multiplay(10,12)
    return (
        <div>
            <h2>Welcome To My Cosmetics </h2>
            <p>total:{total}</p>
            <p>multipay:{multipay}</p>
        </div>
    );
};

export default Cosmatics;