/* eslint-disable react/jsx-indent-props */
/* eslint-disable indent */
/* eslint-disable react/jsx-indent */
/* eslint-disable no-tabs */
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Calculator from './components/Calculator';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Quote from './pages/Quote';
import CalculatorPage from './pages/CalculatorPage';

function App() {
	return (
		<Router>
			<Routes>
				<Route
					exact
					path="/calculator"
					element={(
      <>
							<Navbar />
							<div className="App">
								<CalculatorPage />
								<Calculator />
							</div>
						</>
    )}
				/>
				<Route
					path="/"
					element={(
      <>
							<Navbar />
							<div className="App">
								<Home />
							</div>
						</>
    )}
				/>
				<Route
					path="/quote"
					element={(
      <>
							<Navbar />
							<div className="App">
								<Quote />
							</div>
						</>
    )}
				/>
			</Routes>
		</Router>
	);
}

export default App;
