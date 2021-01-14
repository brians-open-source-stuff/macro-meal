import { Link } from "@reach/router";
import M from "materialize-css";
import { useEffect } from "react";

export default function Menu() {
	useEffect(function mount() {
		var Menuref = document.querySelectorAll(".sidenav");
		var instances = M.Sidenav.init(Menuref);
		Menuref[0].addEventListener("click", e => {
			instances[0].close();
		});
	});

	return (
		<ul id="slide-out" className="sidenav">
			<li>
				<div className="user-view">
					<div className="background" style={{ backgroundColor: "cadetblue" }}>
						<img src="./sidenav-bg.png" style={{ width: "100%" }} alt=""/>
					</div>
					<Link to="#"><span className="white-text name">Floofendorf</span></Link>
					<Link to="#"><span className="white-text email">floof@dorf.com</span></Link>
				</div>
			</li>
			<li>
				<Link to="/my-meals"><i className="material-icons">restaurant_menu</i>My Meals</Link>
				<Link to="/ingredients"><i className="material-icons">receipt</i>Ingredients</Link>
			</li>
		</ul>
	);
}
