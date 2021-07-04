//WAS MADE BY FUNCTIONAL COMPONENT


import React from 'react';


const counterf=({onIncrement,onDecrement,onDelete,counter})=>{

    const formatCount=()=>{
        const {value} = counter;
        return value===0 ? "Zero" : value;
    }


    const getBadgeClasses=()=>{
        let classes = "badge m-2 badge-";
        classes +=counter.value ===0 ? "warning " : "primary";
        return classes;
    }
    return( 
        
        <div className="row" >
            <div className="col-1">
            <span className={getBadgeClasses()}>{formatCount()}</span>
            </div>
            <div className="col">
            <button onClick={()=>onIncrement(counter)} className="btn btn-secondary btn-sm ">+</button>
            <button onClick={()=>onDecrement(counter)} className="btn btn-secondary btn-sm m-2" disabled={counter.value===0 ? 'disabled' : ''}>-</button>
            <button onClick={()=>onDelete(counter.id)} className="btn btn-danger btn-sm ">Delete</button> 
            </div>
            </div>);
}



export default counterf
