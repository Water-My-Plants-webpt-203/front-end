import './App.css';
import { Route, Switch } from 'react-router-dom';
import Styled from './styles/index';
import Home from './Components/home';
import PlantGallery from './Components/plantGallery';
import PlantForm from './Components/plantForm'
import LoginForm from "./Components/LoginForm";
// import SignupForm from './Components/SignupForm'


function App() {

  return (
    <Styled>
      <div className="App">
        <div className="routes">
          <Switch> 
            <Route exact path='/'>
              <Home/>
            </Route>
            <Route path='/login'>
              <LoginForm />  
            </Route>  
            <Route path='/plants'>
              <PlantGallery />
            </Route>
            <Route path='/plantForm'>
              <PlantForm/>
            </Route> 
          </Switch>
        </div>
        {/* <Route exact path="/signup" component={SignupForm} /> */}

      </div>
    </Styled>
  );
}

export default App;

