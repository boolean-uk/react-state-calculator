import { useState } from "react";
import "./App.css";

const OPERATORS = {
	ADD: "+",
	SUBTRACT: "-",
	MULTIPLY: "*",
	DIVIDE: "÷",
	EQUAL: "=",
	CLEAR: "Clear",
};

function calculateResult(operator, numberLeft, numberRight) {
	switch (operator) {
		case OPERATORS.ADD:
			return numberLeft + numberRight;
		case OPERATORS.SUBTRACT:
			return numberLeft - numberRight;
		case OPERATORS.MULTIPLY:
			return numberLeft * numberRight;
		case OPERATORS.DIVIDE:
			return numberLeft / numberRight;
		default:
			return 0;
	}
}

function App() {
	const [numberLeft, setNumberLeft] = useState(0);
	const [numberRight, setNumberRight] = useState(0);
	const [result, setResult] = useState(0);

	const [operator, setOperator] = useState("");

	const [storeResult, setStoreResult] = useState(0);
	const [storeLeft, setStoreLeft] = useState(0);
	const [storeRight, setStoreRight] = useState(0);

	const updateNumber = (setNumber, clickedNumber) => {
		setNumber((prevNumber) => {
			const combinedNumber = prevNumber.toString() + clickedNumber.toString();
			const parsedNumber = parseFloat(combinedNumber);
			return parsedNumber;
		});
	};

	const updateDecimal = (setNumber) => {
		if (!setNumber.toString().includes(".")) {
			setNumber((prevNumber) => prevNumber + ".");
		}
	};

	function resetNumbers() {
		setNumberLeft(0);
		setNumberRight(0);
		setResult(0);
	}

	const handleClick = (e) => {
		const val = e.target.innerText;
		if (val === "+" || val === "-" || val === "*" || val === "÷") {
			setOperator(val);
		}
		setStoreLeft(numberLeft);
		setStoreRight(numberRight);
		if (val === "=") {
			const result = calculateResult(operator, numberLeft, numberRight);
			setResult(result);
			setStoreResult(result);
		} else if (val === "Clear") {
			resetNumbers();
		}
	};

	return (
		<div className="calculator">
			<div className="panel">
				<p>{numberLeft}</p>
				<button onClick={() => setNumberLeft(storeLeft)}>Recall</button>
				<div className="numbers">
					{Array.from(Array(10).keys()).map((num) => (
						<button key={num} onClick={() => updateNumber(setNumberLeft, num)}>
							{num}
						</button>
					))}
					<button onClick={() => updateDecimal(setNumberLeft)}>.</button>
					<button onClick={handleClick}>Clear</button>
				</div>
			</div>

			<div className="panel">
				<p>{operator}</p>
				<div className="numbers">
					<button onClick={handleClick}>+</button>
					<button onClick={handleClick}>-</button>
					<button onClick={handleClick}>*</button>
					<button onClick={handleClick}>÷</button>
				</div>
			</div>

			<div className="panel">
				<p>{numberRight}</p>
				<button onClick={() => setNumberRight(storeRight)}>Recall</button>
				<div className="numbers">
					{Array.from(Array(10).keys()).map((num) => (
						<button key={num} onClick={() => updateNumber(setNumberRight, num)}>
							{num}
						</button>
					))}
					<button onClick={() => updateDecimal(setNumberRight)}>.</button>
					<button onClick={handleClick}>Clear</button>
				</div>
			</div>
			<div className="panel answer">
				<p>{result}</p>
				<div>
					<button onClick={handleClick}>=</button>
					<button onClick={() => setResult(storeResult)}>Recall</button>
				</div>
			</div>
		</div>
	);
}

export default App;
