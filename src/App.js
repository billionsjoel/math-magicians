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
								<Calculator />
							</div>
						</>
    )}
				/>
				<Route
					path="/home"
					element={(
      <>
							<Navbar />
							<div className="App">
								<Home />
							</div>
						</>
    )}
				/>

			</Routes>
		</Router>
	);
}

export default App;
