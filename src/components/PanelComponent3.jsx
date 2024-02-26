import PropTypes from 'prop-types'; // Import PropTypes


export default function PanelComponent3(props) {
    PanelComponent3.propTypes = {
        result: PropTypes.number.isRequired, //  'value' is a string
        setResult: PropTypes.func.isRequired, //  'setValue' is a function
        value1: PropTypes.string.isRequired,
        value2: PropTypes.string.isRequired,
        operation: PropTypes.string.isRequired,
        storeValue: PropTypes.number,
        setStoreValue: PropTypes.func
      };

    const {value1, value2, operation, result, setResult, storeValue, setStoreValue} = props;

    const handResultClick = () => {

        // Secure that value1, value2 and operation is defined:
        if (!value1 || !value2 || !operation) return;
        else{
            switch (operation) {
                case '+':
                  setResult(parseFloat(value1) + parseFloat(value2));
                  break;
                case '-':
                  setResult(parseFloat(value1) - parseFloat(value2));
                  break;
                case '*':
                  setResult(parseFloat(value1) * parseFloat(value2));
                  break;
                case '÷':
                  setResult(parseFloat(value1) / parseFloat(value2));
                  break;
        }
    }
    };

    const handleStoreClick = () => {
        const newValue = result
        setStoreValue(newValue)
        console.log(storeValue);

    };
 
  return (
    <div className="panel answer">
        <p>{result}</p>
        <div>
          <button onClick={() => handResultClick()}>=</button>
        </div>

        <div>
          <button onClick={() => handleStoreClick()}>Store</button>
        </div>
      </div>
  )

};
