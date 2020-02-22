// import React from 'react';
// import logo from './logo.svg';
// import './App.css';
//
// function App() {
//   return (
//     <div className="App">
//       {/*<header className="App-header">*/}
//       {/*  <img src={logo} className="App-logo" alt="logo" />*/}
//       {/*  <p>*/}
//       {/*    Edit <code>src/App.js</code> and save to reload.*/}
//       {/*  </p>*/}
//       {/*  <a*/}
//       {/*    className="App-link"*/}
//       {/*    href="https://reactjs.org"*/}
//       {/*    target="_blank"*/}
//       {/*    rel="noopener noreferrer"*/}
//       {/*  >*/}
//       {/*    Learn React*/}
//       {/*  </a>*/}
//       {/*</header>*/}
//       <h1>Women's World Cup</h1>
//     </div>
//   );
// }
//
// export default App;

import React, { Component } from "react";
import axios from 'axios'
import PlayerCardList from "./components/PlayerCardList";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        players: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/api/players\n')
        .then(res => {
            const players = res.data;
            this.setState({players});
            console.log(this.state.players);
        })
        .catch(err => {
            console.log('Error: ', err)
        })
  }



    render() {
    return (
      <div>
        <h1>Women's World Cup</h1>
          <PlayerCardList playerData={this.state.players} />
      </div>
    );
  }
}

export default App;
