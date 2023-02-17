import {useRef, useState} from "react";

function Calculator() {
    const resultRef = useRef(null);
    const inputRef = useRef(null);
    const [result, setResult] = useState(0);

    function add(e) {
        e.preventDefault();
        setResult((result) => result + Number(inputRef.current.value));
// inputRef.current.value = 0;
    };

    function substract(e) {
        e.preventDefault();
        setResult((result) => result - Number(inputRef.current.value));
    }
    function multiply(e) {
        e.preventDefault();
        setResult((result) => result * Number(inputRef.current.value));
    }
    function divide(e) {
        e.preventDefault();
        setResult((result) => result / Number(inputRef.current.value));
    }

    function resetInput(e) {
        e.preventDefault();
        inputRef.current.value = 0;
    }

    function resetResult(e) {
        e.preventDefault();
        setResult((preVal) => result * 0);
    }

    return (
        <>
            <form>
                <p ref={resultRef}>{result}</p>
            <input
                pattern="[0-9]"
                ref={inputRef}
                placeholder="type a number"
                type="number"/>
            <button onClick={add}>add</button>
            <button onClick={substract}>substract</button>
            <button onClick={multiply}>Multiply</button>
            <button onClick={divide}>Divide</button>
            <button onClick={resetInput}>Reset Input</button>
            <button onClick={resetResult}>Reset Result</button>

            </form>
        </>
    )
}

export default Calculator
