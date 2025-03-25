import { useEffect, useState } from "react";

// Functional component definition
const DigitalClock: React.FC = () => {
    const [time, setTime] = useState(new Date());

    // ON COMPONENT LOAD
    useEffect(() => {
        const timerId = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => clearInterval(timerId);
    }, []);

    return (
        <div style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            height: "100vh",
            fontSize: "48px",
        }}>
            <h1>{time.toLocaleString()}</h1>
        </div>
    );
};

export default DigitalClock;