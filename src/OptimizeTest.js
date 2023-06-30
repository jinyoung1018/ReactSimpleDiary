import React, { useState, useEffect } from "react";

const TextView = ({text}) =>{
    return <div>{text}</div>
}

const CountView = ({count})=>{
    return <div>{count}</div>
}

const OptimizeTest = () =>{

    const [count, setCount] = useState(1);
    const [text, setText] = useState("");

    return <div style={{padding: 50}}>
        <div>
            <h2>count</h2>
            <CountView count={count}></CountView>
            <button onClick={()=>setCount(count +1)}>+</button>
        </div>
        <div>
            <h2>text</h2>
            <TextView text={text}></TextView>
            <input value={text} onChange={(e) => setText(e.target.value)}></input>
        </div>
    </div>
};

export default OptimizeTest;