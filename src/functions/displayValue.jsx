// NOT USE AYMORE.....


const displayValue = (props, number) => {
    

    // Handle click:
    if (props.value === '0') {
        props.setValue(number)
    }
    else{
        props.setValue(props.value + number)
    }
  
};

export default displayValue;
