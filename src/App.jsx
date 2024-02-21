import { useState } from "react";
import "./App.css";

function App() {
	const [firstNumber, setFirstNumber] = useState(0);
	const [secondNumber, setSecondNumber] = useState(0);
	const [operator, setOperator] = useState("+");
	const [total, setTotal] = useState(0);
	// const [storedNumber, setStoredNumber] = useState(0);

	const calculate = (firstNumber, secondNumber, operator) => {
		firstNumber = parseInt(firstNumber);
		secondNumber = parseInt(secondNumber);

		switch (operator) {
			case "+":
				return firstNumber + secondNumber;
			case "-":
				return firstNumber - secondNumber;
			case "*":
				return firstNumber * secondNumber;
			case "÷":
				return firstNumber / secondNumber;
			default:
				throw console.error("Not a valid operator");
		}
	};

	const updatePanelNumber = (currentNumber, newNumber) => {
		if (currentNumber === 0 && newNumber === 0) {
			return currentNumber;
		}
		const returnNumber = currentNumber * 10 + newNumber;

		return returnNumber;
	};

	return (
		<div className="calculator">
			<div className="panel">
				<p>{firstNumber}</p>
				<div className="numbers">
					<button
						onClick={() => {
							setFirstNumber(updatePanelNumber(firstNumber, 1));
						}}
					>
						1
					</button>
					<button
						onClick={() => {
							setFirstNumber(updatePanelNumber(firstNumber, 2));
						}}
					>
						2
					</button>
					<button
						onClick={() => {
							setFirstNumber(updatePanelNumber(firstNumber, 3));
						}}
					>
						3
					</button>
					<button
						onClick={() => {
							setFirstNumber(updatePanelNumber(firstNumber, 4));
						}}
					>
						4
					</button>
					<button
						onClick={() => {
							setFirstNumber(updatePanelNumber(firstNumber, 5));
						}}
					>
						5
					</button>
					<button
						onClick={() => {
							setFirstNumber(updatePanelNumber(firstNumber, 6));
						}}
					>
						6
					</button>
					<button
						onClick={() => {
							setFirstNumber(updatePanelNumber(firstNumber, 7));
						}}
					>
						7
					</button>
					<button
						onClick={() => {
							setFirstNumber(updatePanelNumber(firstNumber, 8));
						}}
					>
						8
					</button>
					<button
						onClick={() => {
							setFirstNumber(updatePanelNumber(firstNumber, 9));
						}}
					>
						9
					</button>
					<button
						onClick={() => {
							setFirstNumber(updatePanelNumber(firstNumber, 0));
						}}
					>
						0
					</button>
					<button onClick={() => setFirstNumber(0)}>Clear</button>
				</div>
			</div>

			<div className="panel">
				<p>{operator}</p>
				<div className="numbers">
					<button onClick={() => setOperator("+")}>+</button>
					<button onClick={() => setOperator("-")}>-</button>
					<button onClick={() => setOperator("*")}>*</button>
					<button onClick={() => setOperator("÷")}>÷</button>
				</div>
			</div>

			<div className="panel">
				<p>{secondNumber}</p>
				<div className="numbers">
					<button
						onClick={() => {
							setSecondNumber(updatePanelNumber(secondNumber, 1));
						}}
					>
						1
					</button>
					<button
						onClick={() => {
							setSecondNumber(updatePanelNumber(secondNumber, 2));
						}}
					>
						2
					</button>
					<button
						onClick={() => {
							setSecondNumber(updatePanelNumber(secondNumber, 3));
						}}
					>
						3
					</button>
					<button
						onClick={() => {
							setSecondNumber(updatePanelNumber(secondNumber, 4));
						}}
					>
						4
					</button>
					<button
						onClick={() => {
							setSecondNumber(updatePanelNumber(secondNumber, 5));
						}}
					>
						5
					</button>
					<button
						onClick={() => {
							setSecondNumber(updatePanelNumber(secondNumber, 6));
						}}
					>
						6
					</button>
					<button
						onClick={() => {
							setSecondNumber(updatePanelNumber(secondNumber, 7));
						}}
					>
						7
					</button>
					<button
						onClick={() => {
							setSecondNumber(updatePanelNumber(secondNumber, 8));
						}}
					>
						8
					</button>
					<button
						onClick={() => {
							setSecondNumber(updatePanelNumber(secondNumber, 9));
						}}
					>
						9
					</button>
					<button
						onClick={() => {
							setSecondNumber(updatePanelNumber(secondNumber, 0));
						}}
					>
						0
					</button>
					<button onClick={() => setSecondNumber(0)}>Clear</button>
				</div>
			</div>
			<div className="panel answer">
				<p>{total}</p>
				<div>
					<button
						onClick={() =>
							setTotal(calculate(firstNumber, secondNumber, operator))
						}
					>
						=
					</button>
					{/* <button onClick={() => setStoredNumber(total)}>Store</button> */}
				</div>
			</div>
		</div>
	);
}

export default App;
