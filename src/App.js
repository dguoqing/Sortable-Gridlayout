import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import GridLayout from 'react-grid-layout';
import '../node_modules/react-grid-layout/css/styles.css'
import '../node_modules/react-resizable/css/styles.css'

var layout = [
  { i: 'aaaa', x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4 },
  { i: 'bbbb', x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4 },
  { i: 'cccc', x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4 },
  { i: 'dddd', x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4 },
];

class App extends Component {
  render() {
    return (
      <div >

        <GridLayout className="layout" layout={layout} cols={12} rowHeight={30} width={1200}>
          <div key="a">a</div>
          <div key="b">b</div>
          <div key="c">c</div>
        </GridLayout>

      </div>
    );
  }
}

export default App;
