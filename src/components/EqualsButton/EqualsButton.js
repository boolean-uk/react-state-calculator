function EqualsButton (props) {

function Equals(event) {
  console.log('equals clicked')
  // const equalSign = event.target.innerText
  props.setEquals('true')
}

    return (

      <div className="panel answer">
        <p>0</p>
        <div>
           <button onClick={Equals}>=</button>
        </div>
      </div>

    )

}

export default EqualsButton