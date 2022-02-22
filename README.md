# React State Simple Calculator
In this exercise you build a simplified calculator application using React.

## Learning Objectives
- Build a component that uses a useState hook to keep component state.
- Build a component with an onClick attribute that has a value of the function to invoke when the event is triggered
- Model the data a react application needs and create state hooks accordingly.

## Set up
* Fork and clone this repository
* `npm install` to install dependencies
* `npm start` to start the React development server

## Requirements
You are a required to implement a simplified calculator app.
![Image](image.png)

- When the presses a numbered button on either of the panels, the display above should be updated to include that number.
  - Numbers should *appended*, so pressing `1` then `2` should result in `12` being displayed
- When user presses the clear button, the display should be set back to `0`
- When the user presses one of the operation buttons (`+`, `-`,`*`,`÷`) the operation display should be updated to show that operation.
- Whenever the operation or either of the numbers display changes, the answer display should be updated to show the result of the calculation.

## Tips
- Start by modelling the state of the application
 - What state will you need to keep track of?
 - What user interactions will modify that state and how?
- If simpler, just start with one or two functional buttons and only consider the add operation. When you have that working, make additional buttons functional.

## Extension
- A new checkbox should be added to the application, "Decimal Only".
- When this box is ticked, the answer should always be rounded to the nearest whole number.

## Extension 2
- Add a "store" button underneath the answer.
- When this button is clicked, the current answer should be stored in a state variable.
- Add a "recall" button to each of the number displays. When this button is clicked, the currently stored value should be shown on the corresponding number panel.