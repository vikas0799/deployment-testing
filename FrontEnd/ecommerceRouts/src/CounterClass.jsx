import React, { Component } from 'react';

class CounterClass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  componentDidMount() {
    console.log("Component mounted with count:", this.state.count);
    // Example: start a timer, fetch initial data, subscribe to events
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("Component updated with count:", this.state.count);
    // Example: update data if props have changed, perform side effects
  }

  componentWillUnmount() {
    console.log("Component will unmount with count:", this.state.count);
    // Example: clean up timers, subscriptions, or other resources
  }


  increment = () => {
    this.setState(prevState => ({
      count: prevState.count + 1
    }));
  };

  decrement = () => {
    this.setState(prevState => ({
      count: prevState.count - 1
    }));
  };

  render() {
    return (
      <div>
        <h2>Counter (Class Component)</h2>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
        <p>Count: {this.state.count}</p>
        <p>Count: {this.state.count}</p>
      </div>
    );
  }
}

export default CounterClass;
