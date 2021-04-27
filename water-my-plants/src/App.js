import "./App.css";
import NewPlant from "./Components/plantForm";
import { connect } from "react-redux";
import { searchAPI } from "./state/actions";
import { useEffect } from "react";
import Login from "./Components/login";
import SignUp from "./Components/signup";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App(props) {
	console.log(props);

	useEffect(() => {
		props.searchAPI();
	}, []);

	return (
		<div className="App">
			<BrowserRouter>
				<Switch>
					<Route exact path="/" component={Login} />
					<Route path="/sign" component={SignUp} />
				</Switch>
			</BrowserRouter>
		</div>
	);
}

const mapStateToProps = (state) => {
	return {
		state: state,
	};
};

export default connect(mapStateToProps, { searchAPI })(App);
