import PropTypes from 'prop-types'

function Numbers( { onNumberClick } ) {
    
    const numClicked = (num) => {
        onNumberClick(num)
    }

    return (
            <div className="numbers">
                <button onClick={ () => numClicked(1)}      >1</button>
                <button onClick={ () => numClicked(2)}      >2</button>
                <button onClick={ () => numClicked(3)}      >3</button>
                <button onClick={ () => numClicked(4)}      >4</button>
                <button onClick={ () => numClicked(5)}      >5</button>
                <button onClick={ () => numClicked(6)}      >6</button>
                <button onClick={ () => numClicked(7)}      >7</button>
                <button onClick={ () => numClicked(8)}      >8</button>
                <button onClick={ () => numClicked(9)}      >9</button>
                <button onClick={ () => numClicked(0)}      >0</button>
                <button onClick={ () => numClicked('.')}      >.</button>
                <button onClick={ () => numClicked('Clear')}>Clear</button>
            </div>
    )
}

Numbers.propTypes = {
    onNumberClick: PropTypes.func.isRequired
}

export default Numbers