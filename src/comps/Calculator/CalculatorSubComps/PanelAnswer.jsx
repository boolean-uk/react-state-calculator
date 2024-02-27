import PropTypes from 'prop-types'

function PanelAnswer( { onClickToAnswer } ) {

    const giveAns = () => {
        onClickToAnswer()
    }

    return (
            <div>
                <button onClick={ () => giveAns() }>=</button>
            </div>
    )
}

PanelAnswer.propTypes = {
    onClickToAnswer: PropTypes.func.isRequired
}

export default PanelAnswer