import React from 'react'
import './App.css';
import Portfolio from './components/Portfolio';

export default class App extends React.Component {
  componentDidMount() {
    WebAssembly.instantiateStreaming(fetch("golib.wasm"), go.importObject).then(async (result) => {
      go.run(result.instance)
    });
  }
  
  render() {
    return (
      <div className="container">
        <Portfolio />
      </div>
    )
  }
}
