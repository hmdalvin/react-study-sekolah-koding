import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

// Function Component - Properties
// function Biodata(props) {
//   return <span>Umurnya {props.age} </span>
// } 

// function Greeting(props) {
//   return <h1> Halo {props.name} - <Biodata age={props.age}/></h1>
// }

// State
class Timer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      time: props.start
    }
  }

  // Lifecycle
  componentDidMount() {
    this.addInterval = setInterval(() => this.increase(), 1000)
  }

  componentWillUnmount() {
    clearInterval(this.addInterval)
  }

  increase() {
    //update state time every one second
    this.setState((state, props) => ({
      time: parseInt(state.time) + 1
    }))
  }


  render() {
    return (
      <div> {this.state.time} </div>
    )
  }
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Timer start="0"/>
        {/* <Greeting name="Hilman" age="25"/> */}
        {/* <Greeting name="Rasyi" age="15"/> */}
      </header>
    </div>
  );
}

export default App;
