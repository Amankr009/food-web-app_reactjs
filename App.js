import React from "react";
import ReactDOM from "react-dom/client";

//functional component
const Title = () => (
    <h1 className="heading">
        Learn React..
    </h1>
);

const MainComponent = () => (
    <div className="main">
        <Title />
        <span className="info">Checking Functional Component in React..</span>
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<MainComponent />);