import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

class App extends React.Component {
  state = {
    number: 0
  }
  incrementNum = () => {
    this.setState({
     number: this.state.number+1 
    })
  }
  decrementNum = () => {
    this.setState({
      number: this.state.number-1
    })
  }

  render () {
    return (
      <div className="App" style={{background: "red"}}>
        <p>
          Value: 
          {
            this.state.number
          }
        </p>
        <button
          style={{background: "blue"}}
          onClick={this.decrementNum}
        >Decrease</button>
        <button
          onClick={this.incrementNum}
        >Increase</button>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
