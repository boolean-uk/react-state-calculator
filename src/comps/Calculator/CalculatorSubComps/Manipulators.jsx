import PropTypes from 'prop-types'

function Manipulators( {onManipulatorClick} ) {

    const clickedManipulator = (man) => {
        onManipulatorClick(man)
    }

    return (
            <div className="numbers">
                <button onClick={() => clickedManipulator('+')} >+</button>
                <button onClick={() => clickedManipulator('-')} >-</button>
                <button onClick={() => clickedManipulator('x')} >x</button>
                <button onClick={() => clickedManipulator('÷')} >÷</button>
            </div>
    )
}

Manipulators.propTypes = {
    onManipulatorClick: PropTypes.func.isRequired
}

export default Manipulators