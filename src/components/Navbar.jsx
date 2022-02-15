/* eslint-disable react/jsx-indent */
/* eslint-disable no-tabs */
/* eslint-disable indent */
import './navBar.css';
import { Link } from 'react-router-dom';

function Nabar() {
	return (
		<div className="menu">
			<div className="logo">MATH MAGICIANS</div>
			<div className="menu-items">
				<ul>
					<li>
						<Link to="/home">Home</Link>
					</li>


				</ul>
			</div>
		</div>
	);
}

export default Nabar;
