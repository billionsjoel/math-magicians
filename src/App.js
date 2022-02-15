/* eslint-disable indent */
/* eslint-disable react/jsx-indent */
/* eslint-disable no-tabs */
import './App.css';
import Calculator from './components/Calculator';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
	return (
		<Router>
			<Route exact path="/" />
			<>
				<BrowserRouter>
					<Navbar />
					<div className="App">
						<Calculator />
					</div>
				</BrowserRouter>
			</>
		</Router>
	);
}

export default App;
