import React, { Component } from 'react'
 import Clock from 'react-clock'
 import 'react-clock/dist/Clock.css';

export default class Myclock extends Component {
  state = {
      date: new Date(),
    }
  
    componentDidMount() {
      setInterval(
        () => this.setState({ date: new Date() }),
        1000
      );
    }
  render() {
    return (
      <div className="clock">
         
        <Clock
          value={this.state.date}
        />
      </div>
    )
  }
}



  
