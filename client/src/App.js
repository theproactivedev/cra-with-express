import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      bio: ""
    };

    this.set = this.set.bind(this);
  }

  set(user) {
    this.setState({
      name: user.user,
      bio: user.bio
    });
  }

  componentDidMount() {
    fetch("/testApi/user")
    .then(res => res.json())
    .then(json => this.set(json))
    .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          {this.state.name !== "" &&
            <div>
              <h1>Hi! My name is {this.state.name}. {this.state.bio}</h1>
            </div>
          }
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
    );
  }
}

export default App;
