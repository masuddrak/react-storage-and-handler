// set local storage data base 
const addStorage=id=>{
    const itmes=localStorage.getItem(id)
    if(itmes){
        const newItem=parseInt(itmes)+1;
        localStorage.setItem(id,newItem)
    }
    else{
        localStorage.setItem(id,1)
    }

}
export {addStorage}