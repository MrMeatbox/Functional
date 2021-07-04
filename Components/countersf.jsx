//WAS MADE BY FUNCTIONAL COMPONENT

import React from 'react';
import Counter from './counterf';

const countersf=({onReset,counters,onDelete,onDecrement,onIncrement})=>{
    return ( <div>

        <button onClick={onReset} className="btn btn-primary btn-sm m-2">Reset</button>
        
        {counters.map((counter)=><Counter 
        onDelete={onDelete} 
        onIncrement={onIncrement}
        onDecrement={onDecrement}
        counter={counter} />
        )}
     </div>);
}

export default countersf