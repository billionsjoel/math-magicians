import './App.css';
import { useState } from 'react';
import Calculator from './components/Calculator';

function App() {
  const [answer, setAnswer] = useState(32);
  return (
    <>
      <div className="App">
        <Calculator answer={answer} handleCalc={setAnswer} />
      </div>
    </>
  );
}

export default App;
