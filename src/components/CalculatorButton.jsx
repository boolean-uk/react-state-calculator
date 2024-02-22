export default function CalculatorButton({ children, setValue }) {
  return <button onClick={() => setValue(children)}>{children}</button>;
}
