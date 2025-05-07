import React from 'react';

class Counter_LifeCycle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    console.log('Constructor: Initialization');
  }

  componentDidMount() {
    console.log('ComponentDidMount: Component mounted');
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      console.log(`ComponentDidUpdate: Count updated to ${this.state.count}`);
    }
  }

  componentWillUnmount() {
    console.log('ComponentWillUnmount: Component is being unmounted');
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
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
      </div>
    );
  }
}

export default Counter_LifeCycle;
