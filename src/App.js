import './App.css';
import Calculator from './components/Calculator';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <Navbar />
      <div className="App">
        <Calculator />
      </div>
    </>
  );
}

export default App;
