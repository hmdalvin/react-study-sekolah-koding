import React, { Component } from 'react';
import { BrowserRouter, Routes, Route, Link, useParams} from 'react-router-dom'
import './App.css';

class App extends Component {
  render() {
    return (
      <table>
        <tr>
          <Column/>
        </tr>
      </table>
    );
  }
}

class Column extends React.Component {
  render() {
    return (
      <React.Fragment>
        <td>Data Satu</td>
        <td>Data berikutnya</td>
      </React.Fragment>
    );
  }
}

export default App;
