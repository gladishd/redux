import logo from './logo.svg';
import './App.css';

import React from 'react';
import { connect } from 'react-redux';
import { fetchSingleInt, duplicateCurrentInt, removeIntThunk, updateIntThunk } from './redux/reducer1';
import { fetchTextThunkCreator, updateTextThunkCreator } from './redux/reducer2';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      currentInt: null,
    };
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
        console.log("data.json fetch response: ", response)
        return response.json();
      })
      .then((myJson) => {
        console.log("as JSON: ", myJson);
        this.setData(myJson)
      });
  }

  setData(newData) {
    this.setState({ data: newData })

    if (!this.props.reduxStore.state2.initialValue) {
      this.setState({
        data: this.props.reduxStore.state2
      })
      console.log("redux store: ", this.props)
    }
  }

  componentDidMount() { // instead of useEffect
    this.getData();
    this.props.getSingleInt();
    this.props.duplicateCurrentInt(3);
    this.props.removeIntThunk();
    this.props.updateIntThunk(10, 20);


    this.props.fetchText();
    // this.props.updateText('new text sentence 1', 'new text sentence 2')
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


const mapStateToProps = function (store) {
  return {
    reduxStore: store
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    getSingleInt: () => { dispatch(fetchSingleInt()) },
    duplicateCurrentInt: (int) => { dispatch(duplicateCurrentInt(int)) },
    removeIntThunk: () => { dispatch(removeIntThunk()) },
    updateIntThunk: (int, newInt) => { dispatch(updateIntThunk(int, newInt)) },

    fetchText: () => { dispatch(fetchTextThunkCreator()) },

    updateText: (sentence1, sentence2) => { dispatch(updateTextThunkCreator(sentence1, sentence2)) },

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
