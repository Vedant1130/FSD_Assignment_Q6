import { useState } from "react";
import "./App.css";

function App() {
    const [count, setCount] = useState(0);

    function increment() {
        setCount((previousCount) => previousCount + 1);
    }

    function decrement() {
        setCount((previousCount) => previousCount - 1);
    }

    function reset() {
        setCount(0);
    }

    return (
        <div className="counter-container">
            <div className="counter-card">
                <div className="counter-icon">↕</div>

                <h1>React Counter</h1>
                <p className="subtitle">
                    A simple counter using the useState hook
                </p>

                <div className="counter-display">
                    <span className="counter-label">CURRENT COUNT</span>
                    <h2 className={count < 0 ? "negative" : ""}>
                        {count}
                    </h2>
                    <p>
                        {count === 0
                            ? "Ready to get started?"
                            : count > 0
                            ? "You're counting up!"
                            : "The count is negative"}
                    </p>
                </div>

                <div className="counter-buttons">
                    <button
                        className="decrement-btn"
                        onClick={decrement}
                    >
                        − Decrement
                    </button>

                    <button
                        className="increment-btn"
                        onClick={increment}
                    >
                        + Increment
                    </button>
                </div>

                <button className="reset-btn" onClick={reset}>
                    ↻ Reset Counter
                </button>

                <div className="counter-footer">
                    Built with React useState
                </div>
            </div>
        </div>
    );
}

export default App;