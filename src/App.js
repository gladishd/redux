import logo from './logo.svg';
import './App.css';

import React from 'react';
import { connect } from 'react-redux';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      currentInt: null,
    };
    this.putIntOnState = this.putIntOnState.bind(this);
    this.setData = this.setData.bind(this);
    this.getData = this.getData.bind(this);
  };

  getData() {
    fetch('data.json'
      , {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      }
    )
      .then(function (response) {
        console.log(response)
        return response.json();
      })
      .then((myJson) => {
        console.log(myJson);
        this.setData(myJson)
      });
  }

  setData(newData) {
    this.setState({ data: newData })
  }

  putIntOnState() {

  }

  componentDidMount() { // instead of useEffect
    this.getData();

  }

  render() {
    return <div className="App">
      {
        this.state.data && this.state.data.length > 0 && this.state.data.map((item) => <p key={item._id}>{item.about}</p>)
      }
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
      </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
      </a>
      </header>
    </div>
  }
}


// const mapStateToProps = function (store) {
//   return {
//     users: store.userState.users
//   };
// }

export default connect(null, null)(App);
// export default App;
