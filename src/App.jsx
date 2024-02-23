import './App.css';
import React from 'react';
import useCalculator from './components/mainCalculator';

function App() {
  const Calculator = useCalculator();

  return (
    // Render the JSX returned by the useCalculator hook
    <React.Fragment>
      {Calculator}
    </React.Fragment>
  );
}
export default App;
