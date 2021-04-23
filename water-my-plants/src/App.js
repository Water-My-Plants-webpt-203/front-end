import './App.css';
import NewPlant from './Components/plantForm'; 
import { connect } from 'react-redux'
import { searchAPI } from './state/actions';
import { useEffect } from 'react'

function App(props) {
  console.log(props);

  useEffect(() => {
    props.searchAPI();
  }, [])

  return (
    <div className="App">
      <h1>Add A New Plant Form</h1>
      <NewPlant/>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    state: state,
  }
}

export default connect(mapStateToProps, {searchAPI})(App);