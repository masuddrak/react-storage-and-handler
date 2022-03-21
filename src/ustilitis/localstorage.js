// set local storage data base 
const addStorage=id=>{

    let shoppingCard={};
    // get Shopping Card
    const storageCard=localStorage.getItem('addShopingCard');
    if(storageCard){
        shoppingCard=JSON.parse(storageCard)
    }else{
        shoppingCard={}
    }

    // add quantity
    const itmes=shoppingCard[id]
    if(itmes){
        const newCountity=itmes+1
        shoppingCard[id]=newCountity
    }
    else{
        shoppingCard[id]=1
    }
    localStorage.setItem('addShopingCard',JSON.stringify(shoppingCard))
}
export {addStorage}