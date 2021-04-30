import "./App.css";
import { Route, Switch } from "react-router-dom";
import Styled from "./styles/index";
import Home from "./Components/Home";
import PlantGallery from "./Components/plantGallery";
import PlantForm from "./Components/PlantForm";
import Login from "./Components/Login";
import Signup from "./Components/Signup";

function App() {
  return (
    <Styled>
      <div className="App">
        <div className="routes">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/signup">
              <Signup />
            </Route>
            <Route path="/plants">
              <PlantGallery />
            </Route>
            <Route path="/plantForm">
              <PlantForm />
            </Route>
          </Switch>
        </div>
        {/* <Route exact path="/signup" component={SignupForm} /> */}
      </div>
    </Styled>
  );
}

export default App;
