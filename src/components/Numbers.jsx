import CustomButton from "./CustomButton"


export default function Numbers({ value, setValue }) {
  const buttons = []

  const handleNumberClick = (num) => {
    if (value === "0") {
      setValue(num.toString())
    } else {
      setValue(value + num.toString())
    }
  }

  const Clear = () => {
    setValue(0)
  }


  for (let i = 0; i <= 9; i++) {
      buttons.push(<CustomButton key={i} setValue={setValue} value={value} 
        >{i}</CustomButton>)
  }
  return (
      <div className="panel">
          <p>{value}</p>
          <div className="numbers">
              {buttons}
              <button onClick={Clear}>clear</button>
          </div>
      </div>
  )
}