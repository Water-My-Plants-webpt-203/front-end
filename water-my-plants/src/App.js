import './App.css';
import { connect } from 'react-redux'
import { searchAPI } from './state/actions';
import { useEffect } from 'react'
import logo from './images/logo.png';

import Styled from './styles/index';

function App(props) {

  // useEffect(() => {
  //   props.searchAPI();
  // }, [])

  return (
    <Styled>
      <div className="App">
        <img src={logo} />
      </div>
    </Styled>
  );
}

const mapStateToProps = (state) => {
  return {
    state: state,
  }
}

export default connect(mapStateToProps, {searchAPI})(App);