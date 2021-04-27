import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { connect } from "react-redux";
import { searchAPI } from "./state/actions";
import { useEffect } from "react";
import LoginForm from "./Components/LoginForm";
// import SignupForm from './Components/SignupForm'
import PlantGallery from "./Components/PlantGallery";

function App(props) {
  console.log(props);

  useEffect(() => {
    props.searchAPI();
  }, []);

  return (
    <Router>
      <div className="App">
        {/* move NewPlant to PlantGallery */}
        <Route exact path="/" component={LoginForm} />
        {/* <Route exact path="/signup" component={SignupForm} /> */}
        <Route path="/plants" component={PlantGallery} />
      </div>
    </Router>
  );
}

const mapStateToProps = (state) => {
  return {
    state: state,
  };
};

export default connect(mapStateToProps, { searchAPI })(App);
