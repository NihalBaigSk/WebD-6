const { useState } = React;

function Calculator() {
    const [input, setInput] = useState("");
    const [result, setResult] = useState(null);

    const handleClick = (value) => {
        setInput(input + value);
    };

    const handleClear = () => {
        setInput("");
        setResult(null);
    };

    const handleCalculate = () => {
        try {
            const res = eval(input); // Note: eval should be used carefully in real applications
            setResult(res);
        } catch (error) {
            setResult("Error");
        }
    };

    return (
        <div className="calculator">
            <div className="display">
                {result !== null ? result : input || "0"}
            </div>
            <div className="buttons">
                <button onClick={() => handleClick("1")}>1</button>
                <button onClick={() => handleClick("2")}>2</button>
                <button onClick={() => handleClick("3")}>3</button>
                <button onClick={() => handleClick("+")}>+</button>
                <button onClick={() => handleClick("4")}>4</button>
                <button onClick={() => handleClick("5")}>5</button>
                <button onClick={() => handleClick("6")}>6</button>
                <button onClick={() => handleClick("-")}>-</button>
                <button onClick={() => handleClick("7")}>7</button>
                <button onClick={() => handleClick("8")}>8</button>
                <button onClick={() => handleClick("9")}>9</button>
                <button onClick={() => handleClick("*")}>*</button>
                <button onClick={handleClear}>C</button>
                <button onClick={() => handleClick("0")}>0</button>
                <button onClick={handleCalculate}>=</button>
                <button onClick={() => handleClick("/")}>/</button>
            </div>
        </div>
    );
}

ReactDOM.render(<Calculator />, document.getElementById("root"));
