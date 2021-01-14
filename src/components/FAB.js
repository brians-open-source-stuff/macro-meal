import { useEffect } from "react";
import { Link } from "@reach/router";
import M from "materialize-css";

export default function FAB() {
	useEffect(function mount() {
		var FABref = document.querySelectorAll(".fixed-action-btn");
		M.FloatingActionButton.init(FABref)
	}, []);

	return (
		<div className="fixed-action-btn">
			<button className="btn-floating btn-large red">
				<i className="large material-icons">add</i>
			</button>
			<ul>
				<li><Link to="/" className="btn-floating green"><i className="material-icons">restaurant_menu</i></Link></li>
				<li><Link to="/" className="btn-floating blue"><i className="material-icons">receipt</i></Link></li>
			</ul>
		</div>
	);
}
