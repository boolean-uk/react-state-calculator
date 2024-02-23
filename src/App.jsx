import { useState } from "react";
import "./App.css";

function App() {
	const buttonArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "."];

	const [firstNumber, setFirstNumber] = useState("0");
	const [secondNumber, setSecondNumber] = useState("0");
	const [operator, setOperator] = useState("+");
	const [total, setTotal] = useState("0");
	const [storedNumber, setStoredNumber] = useState("0");

	const calculateTotal = () => {
		const parsedFirstNumber = parseFloat(firstNumber);
		const parsedSecondNumber = parseFloat(secondNumber);

		switch (operator) {
			case "+":
				return parsedFirstNumber + parsedSecondNumber;
			case "-":
				return parsedFirstNumber - parsedSecondNumber;
			case "*":
				return parsedFirstNumber * parsedSecondNumber;
			case "÷":
				return parsedFirstNumber / parsedSecondNumber;
			default:
				console.error("Not a valid operator");
				return 0;
		}
	};

	const computePanelNumber = (currentNumber, newNumber) => {
		if (newNumber === "." && currentNumber.includes(".")) {
			return currentNumber;
		}
		if (currentNumber === "0" && newNumber === "0") {
			return currentNumber;
		}
		if (
			currentNumber.length < 2 &&
			currentNumber === "0" &&
			newNumber !== "."
		) {
			return newNumber;
		}

		return `${currentNumber + newNumber}`;
	};

	return (
		<div className="calculator">
			<div className="panel">
				<p>{firstNumber}</p>
				<div className="numbers">
					{buttonArray.map((buttonValue, index) => {
						return (
							<button
								key={index}
								onClick={() => {
									setFirstNumber(computePanelNumber(firstNumber, buttonValue));
								}}
							>
								{buttonValue}
							</button>
						);
					})}
					<button onClick={() => setFirstNumber("0")}>Clear</button>
					<button
						onClick={() => {
							setFirstNumber(storedNumber);
						}}
					>
						Recall
					</button>
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
					{buttonArray.map((buttonValue, index) => {
						return (
							<button
								key={index}
								onClick={() => {
									setSecondNumber(
										computePanelNumber(secondNumber, buttonValue)
									);
								}}
							>
								{buttonValue}
							</button>
						);
					})}
					<button onClick={() => setSecondNumber("0")}>Clear</button>
					<button
						onClick={() => {
							setSecondNumber(storedNumber);
						}}
					>
						Recall
					</button>
				</div>
			</div>
			<div className="panel answer">
				<p>{total}</p>
				<div>
					<button onClick={() => setTotal(calculateTotal())}>=</button>
					<button onClick={() => setStoredNumber(total)}>
						Stored ({storedNumber})
					</button>
					<button
						onClick={() => {
							setTotal(storedNumber);
						}}
					>
						Recall
					</button>
				</div>
			</div>
		</div>
	);
}

export default App;
