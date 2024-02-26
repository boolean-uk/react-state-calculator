import React from 'react'
import PropTypes from 'prop-types'; // Import PropTypes

export default function recallValue(props) {
    recallValue.propTypes = {
        storeValue: PropTypes.number
      };
      
        // Destructed from props.
    const {storeValue} = props;
    
}
