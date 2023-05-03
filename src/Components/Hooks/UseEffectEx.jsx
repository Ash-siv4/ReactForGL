import { useState, useEffect } from "react";

const UseEffectEx = () => {

    //useState updates one thing
    const [time, setTime] = useState(new Date().toLocaleTimeString());
    const [count, setCount] = useState(0);

    const [click, setClick] = useState(false);

    //runs after the first render and after every update
    //updates multiple things at once
    useEffect(() => {
        setInterval(() => {
            setTime(new Date().toLocaleTimeString());
        }, 1000);
        setCount(count + 10);
        console.log("running")
    }, [click])
    //[] - run the effect once
    //[something] - run the effect everytime "something" changes
    //1000 - run the effect every 1000ms

    return (
        <>
            <h1>{time}</h1>
            <p>Count value {count}</p>
            <h2>Button value: {click ? <p>true</p> : <p>false</p>}</h2>
            <button onClick={() => setClick(!click)}>Click</button>
        </>
    )
}
export default UseEffectEx;