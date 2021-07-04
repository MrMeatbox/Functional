//WAS MADE BY FUNCTIONAL COMPONENT

import { useState } from "react";
import React from 'react';
import Navbar from "./Components/navbar";
//import Counters from "./Components/counters";
import Countersf from "./Components/countersf";
import './App.css';

const  Appf=()=> {

    const[counters, setCounters] = useState([{id:1, value:4},
        {id:2, value:0},
        {id:3, value:0},
        {id:4, value:0}]);


       const handleIncrement = (counter) =>{
        const ncounters= [...counters];
        const index = ncounters.indexOf(counter);
        ncounters[index] = {...counter};
        ncounters[index].value++;
        setCounters(ncounters);
        };
        
        const handleDecrement = (counter) =>{
          const ncounters= [...counters];
          const index = ncounters.indexOf(counter);
          ncounters[index] = {...counter};
          ncounters[index].value--;
          setCounters(ncounters);
        };
        
       const handleReset = () =>{
            const ncounters = counters.map(c=>{
                c.value = 0;
                return c;
            });
            setCounters(ncounters);
        } 
        
        const handelDelete = counterId =>{
            const ncounters = counters.filter(c=> c.id!==counterId);
            setCounters(ncounters);
        }

        return (
            <React.Fragment>
              <Navbar totalCounters={counters.filter(c=> c.value >0).length} />
              <main className="container">
                <Countersf
                          counters={counters}
                          onReset={handleReset} 
                          onIncrement={handleIncrement}
                          onDecrement={handleDecrement} 
                          onDelete={handelDelete} 
                  />
        
              </main>
            </React.Fragment>
            
        
          );
    
}

export default Appf
