import Button from './Button'

export default function NumbersPanel({ number, setNumber, store }) {
    const NUMBER_OF_DIGITS = 9

    // it is used with the map functions to create the buttons
    const buttonNames = ['1', '2', '3','4', '5', '6', '7', '8', '9','0']

    // This function take an intial value, which is the number
    // that is displayed at the calculator, either firstNumber or secondNumber
    //, a new value which is the value of the button the user pressed
    // and a function (updateOriginal) that will be used to update the initial value
    // either setFirstValue or setSecondValue
    function updateNumbers(originalValue, newValue, updateOriginal) {
        if (originalValue.length <= NUMBER_OF_DIGITS) {
            // if number is 0, overwrite it
            // with the value
            if (originalValue === '0')
                updateOriginal(newValue)
            // if the number is not equal to 0
            // concatenate with the value
            else 
                updateOriginal(originalValue + newValue)
        }
    }

    // this function adds a dot to the originalValue (firstNumber or secondNumber),
    // to make it represent decimal numbers
    function addDot(originalValue, updateOriginal) {
        // check if there is already a dot
        // if it already exists then ignore the button press
        if (!originalValue.includes('.')) {
            // use the above function to add the dot, like we append all other elements
            // using the appropriate function for each variable
            updateNumbers(originalValue, '.', updateOriginal)
        }
    }

    return (
        <div className="panel">
          <p>{number}</p>
          <div className="numbers">
            {/*
              Button component needs 
                1) a value as a display name
                2) a function that will be called when it is clicked
                  We pass the setFirstP function as a parameter to our
                  Button component and assign it to the onClick function
                  So, when the button is clicked, the firstP function is called
            */}
            {
              // use the map function, which works as a for loop to create the buttons
              buttonNames.map(n => 
                <Button key={'1' + n} value={n} 
                  fun={(value) => { updateNumbers(number, value, setNumber) }} />
              )
            }
            
            <Button value={'.'} fun={(_) => { addDot(number, setNumber) }} />

            {/*Clear change the value to the string '0' 
              we have to make a buttun with the clear function
              function clear = 0 value of secondNumber
              clear turns the value of the secondNumber to zero
              we pass as a parameter a function that takes an argument,
              but it doesn't use it
            */}
            <Button value={'Clear'} fun={(_) => setNumber('0') } />

            <Button value={'Recall'} fun={(_) => { setNumber(store) }} />
          </div>
        </div>
    )
}