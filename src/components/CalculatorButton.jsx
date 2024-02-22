export default function CalculatorButton({ children, setValue, value }) {
  const setButtonValue = () => {
    if (!value) {
      setValue(children);
      return;
    }

    if (value === 0 && children === 0) {
      return;
    }

    setValue(parseInt(`${value}${children}`));
  };

  return <button onClick={() => setButtonValue()}>{children}</button>;
}
