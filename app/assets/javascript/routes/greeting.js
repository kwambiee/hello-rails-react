import React from "react";
import { useSelector } from "react-redux";

const Greeting = () => {
    const greetings = useSelector((state) => state.greetings);

    return(
        <div>
            {greetings.map((greeting) => (
                <div key={greeting.id}>
                    <h1>{greeting.greeting}</h1>
                </div>
            ))}
        </div>
    );
}
export default Greeting;