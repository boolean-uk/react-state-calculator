export default function CalculatorButton({ children, setValue, value }) {
  const setButtonValue = () => {
    if (!value) {
      setValue(children);
      return;
    }

    const number = `${value}${children}`;

    if (value === 0 && children === 0 && !number.includes(".")) {
      return;
    }

    setValue(number);
  };

  return <button onClick={() => setButtonValue()}>{children}</button>;
}
