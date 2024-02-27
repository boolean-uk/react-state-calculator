function ButtonComponent({ children, value, setValue }) {
    function updateNumber() {
        if (value === 0) {
            if (children != 0){
                setValue(children)
            }
        } else {
            setValue(`${value}${children}`)
        }
    }

    return (
        <button onClick={updateNumber}>{children}</button>
    )
}

export default ButtonComponent