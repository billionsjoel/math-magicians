/* eslint-disable indent */
/* eslint-disable react/jsx-indent */
/* eslint-disable no-tabs */
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Calculator from './components/Calculator';
import Navbar from './components/Navbar';

function App() {
	return (
		<Router>
			<Routes>
				<Route
					exact
					path="/"
					element={
						<>
							<Navbar />
							<div className="App">
								<Calculator />
							</div>
						</>
					}
				></Route>
			</Routes>
		</Router>
	);
}

export default App;
