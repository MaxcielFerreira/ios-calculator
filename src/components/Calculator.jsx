import React, { useState } from "react";
import Container from '@mui/material/Container';
import './Calculator.css'
import { Box } from "@mui/material";

export default function Calculator() {
    const [result, setResult] = useState(0);
    const [oldResult, setOldResult] = useState(0);
    const [operator, setOperator] = useState();


    function onchangeNumber(e) {

        if (result.length >= 9) return

        result === 0 ? formatDisplay(e.target.value) : formatDisplay(result + e.target.value);
    }

    function percentual() {
        setResult(result / 100);
    }

    function positiveInNegative() {
        const num = parseInt(result);
        num > 0 ? setResult(num * -1) : setResult(Math.abs(num));
    }

    function clear() {
        setResult(0);
    }

    function operatorHandler(e) {
        setOperator(e.target.value);
        setOldResult(result);
        setResult(0);
    }

    function formatDisplay(number) {
        let display;
        let currentValue;

        if (number == ",") {
            currentValue = parseFloat(number.replace(/\./g, ''));
            display = currentValue.toLocaleString('pt-BR');
        }

        setResult(display || number);
    }

    function calculator() {

        let oldNumber = parseFloat(oldResult.replace(',', '.'));
        let newNumber = parseFloat(result.replace(',', '.'));

        let calculatorResult;
        switch (operator) {
            case "+":
                calculatorResult = oldNumber + newNumber;
                break;
            case "-":
                calculatorResult = oldNumber - newNumber;
                break;
            case "X":
                calculatorResult = oldNumber * newNumber;
                break;
            case "/":
                calculatorResult = oldNumber / newNumber;
                break;
        }

        if (Number.isInteger(calculatorResult)) {
            setResult(parseInt(calculatorResult));
        } else {
            setResult(calculatorResult.toString().replace('.', ','));
        }
    }

    return (
        <div>
            <Box m={3} />
            <Container maxWidth="xs">
                <div className="calculator">
                    <h1 className="screen">{result}</h1>
                    <button className="grey" onClick={clear}>AC</button>
                    <button className="grey" onClick={positiveInNegative}>+/-</button>
                    <button className="grey" onClick={percentual}>%</button>
                    <button className="orange" onClick={operatorHandler} value="/">/</button>
                    <button className="black" onClick={onchangeNumber} value={7}>7</button>
                    <button className="black" onClick={onchangeNumber} value={8}>8</button>
                    <button className="black" onClick={onchangeNumber} value={9}>9</button>
                    <button className="orange" onClick={operatorHandler} value="X">X</button>
                    <button className="black" onClick={onchangeNumber} value={4}>4</button>
                    <button className="black" onClick={onchangeNumber} value={5}>5</button>
                    <button className="black" onClick={onchangeNumber} value={6}>6</button>
                    <button className="orange" onClick={operatorHandler} value="-">-</button>
                    <button className="black" onClick={onchangeNumber} value={1}>1</button>
                    <button className="black" onClick={onchangeNumber} value={2}>2</button>
                    <button className="black" onClick={onchangeNumber} value={3}>3</button>
                    <button className="orange" onClick={operatorHandler} value="+">+</button>
                    <button className="black" id="button-zero" onClick={onchangeNumber} value={0}>0</button>
                    <button className="black" onClick={onchangeNumber} value={","}>,</button>
                    <button className="orange" onClick={calculator} value="=">=</button>
                </div>
            </Container>
        </div>
    )
}