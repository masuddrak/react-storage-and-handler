import React, { useEffect, useState } from 'react';
import Display from '../Display/Display';



const Cosmatics = () => {
    const [cosmatics,setCosmatics]=useState([]);
    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setCosmatics(data))
    },[])
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