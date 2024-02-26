// NOT USE AYMORE.....


const displayValue = (props, number) => {
    

    // Handle click:
    if (props.value === '0') {
        props.setValue(number)
    }
    else{
        props.setValue(number + props.value)
    }
  
};

export default displayValue;
