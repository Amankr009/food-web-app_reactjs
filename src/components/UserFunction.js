import { useState, useEffect } from "react";

const UserFunction = ({name, type}) => {
    const [count, setCount] = useState(0);
    
    useEffect(() => {
        console.log("Child useEffect of Functional Component")

        const operationsOnPageChangesCheck = setInterval(() => {
            console.log("Interval in Functional Component");
        },1000);

        return () => {
            clearInterval(operationsOnPageChangesCheck);
        }
    },[]);

    const increase = () => {
        return (
            setCount(count+1)
        )
    };

    return (
        <div className="user-card">
            <div>Name: {name}</div>
            <div>Info: Getting name with the help of {type} Component</div>
            <h4>Count from Function: {count}</h4>
            <button onClick={increase}>Increase Count</button>
            {console.log("Child return of Functional Component")}
        </div>
    )
};

export default UserFunction;