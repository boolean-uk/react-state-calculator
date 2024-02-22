import React from 'react'
function ButtonComponent({children, setValue, value}) {
    const setButtonValue = () => {
        if(!value){
            setValue(children)
            return
        }

        if(value === 0 && children === 0){
            return
        }
        setValue((`${value}${children}`))
    }

  return (
    <button onClick={() => setButtonValue()}>{children}</button>
  )
}

export default ButtonComponent