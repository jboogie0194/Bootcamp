import { useState } from "react";

interface CounterProps {
    count?: number;
}

// Functional component definition
const Counter: React.FC<CounterProps> = ({ count = 0}) => {
    const [counter, setCounter] = useState(count);

    return (
        <div style={{
            display: "flex",
        }}>
            <button className="btn btn-primary" onClick={() => setCounter(counter - 1)}>-</button>
            <h1>{counter}</h1>
            <button className="btn btn-primary" onClick={() => setCounter(counter + 1)}>+</button>
        </div>
    );
};

export default Counter;