export default function CalculatorButton({
  children,
  setValue,
  value,
  isDecimal,
  setIsDecimal,
}) {
  const setButtonValue = () => {
    if (!value) {
      setValue(children);
      return;
    }

    if (
      (value === 0 && children === 0) ||
      (value === "." && children === ".")
    ) {
      return;
    }

    const number = !isDecimal ? `${value}${children}` : `${value}.${children}`;
    console.log(isDecimal);

    setValue(parseFloat(number));
  };

  return <button onClick={() => setButtonValue()}>{children}</button>;
}
