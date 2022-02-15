/* eslint-disable react/jsx-indent */
/* eslint-disable no-tabs */
/* eslint-disable indent */
import './navBar.css';
import { Link } from 'react-router-dom';

function Nabar() {
	return (
		<div className="menu">
			<div className="logo">Math Magicians</div>
			<div className="menu-items">
				<ul>
					<li>
						<Link to="/home">Home</Link>
					</li>
					<li>
						<Link to="/calculator">Calculator</Link>
					</li>
					<li>
						<Link to="/quote">Quote</Link>
					</li>
				</ul>
			</div>
		</div>
	);
}

export default Nabar;
