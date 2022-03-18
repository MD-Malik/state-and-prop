import React from "react";

const Counter=()=>{
    const [counter, setCounter]=React.useState(0);

    const handleChange=(value)=>{
        setCounter(counter+value);
    }
    return (
        <>
        <h1>Counter {counter}</h1>
        <button onClick={()=>handleChange(-1)}>-</button>
        <button onClick={()=>handleChange(+1)}>+</button>
        <button onClick={()=>handleChange(counter)}>Double</button>
        </>
    )
}

export { Counter } 