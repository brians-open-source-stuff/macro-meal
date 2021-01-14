import { Router } from '@reach/router';
import 'materialize-css/dist/css/materialize.min.css';
import FAB from './components/FAB';
import Menu from './components/Menu';
import Ingredients from './pages/Ingredients';

function App() {
	

	return (
		<div className="App">
			<header style={{ display: "flex", flexDirection: "row-reverse", padding: "0.5em 1em" }}>
				<button data-target="slide-out" className="sidenav-trigger" style={{ background: "none", border: "none", appearance: "initial", display: "flex", alignItems: "center" }}><i className="material-icons">menu</i></button>
			</header>
			<Menu/>
			<FAB/>
			
			<Router>
				<Ingredients path="/ingredients"/>
			</Router>
		</div>
	);
}

export default App;
