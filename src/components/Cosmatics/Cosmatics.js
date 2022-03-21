import React from 'react';
import Display from '../Display/Display';



const Cosmatics = () => {
    const cosmatics=[
        {id:1,name:'alta',price:100},
        {id:2,name:'alta',price:200},
        {id:3,name:'alta',price:300},
        {id:4,name:'alta',price:400},
        {id:5,name:'alta',price:500},
    ]
    return (
        <div>
            <h2>Welcome To My Cosmetics </h2>
           {
               cosmatics.map(cosmatic=><Display key={cosmatic.id} cosmatic={cosmatic}></Display>)
           }
        </div>
    );
};

export default Cosmatics;