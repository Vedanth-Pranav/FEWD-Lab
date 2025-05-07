import React from 'react';

class Counter_LifeCycle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      isIncrementing: true
    };
    console.log('Constructor: Initialization');
  }

  componentDidMount() {
    console.log('ComponentDidMount: Component mounted');
    this.startCounter();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.isIncrementing !== this.state.isIncrementing) {
      console.log('ComponentDidUpdate: Mode changed');
      clearInterval(this.interval);
      this.startCounter();
    }
    if (prevState.count !== this.state.count) {
      console.log(`ComponentDidUpdate: Count updated to ${this.state.count}`);
    }
  }

  componentWillUnmount() {
    console.log('ComponentWillUnmount: Component is being unmounted');
    clearInterval(this.interval);
  }

  startCounter = () => {
    this.interval = setInterval(() => {
      this.setState(prevState => ({
        count: prevState.isIncrementing ? prevState.count + 1 : prevState.count - 1
      }));
    }, 1000);
  };

  toggleMode = () => {
    this.setState(prevState => ({
      isIncrementing: !prevState.isIncrementing
    }));
  };

  render() {
    return (
      <div>
        <h1>{this.state.isIncrementing ? 'Incrementing' : 'Decrementing'} Count: {this.state.count}</h1>
        <button onClick={this.toggleMode}>
          Switch to {this.state.isIncrementing ? 'Decrement' : 'Increment'}
        </button>
      </div>
    );
  }
}

export default Counter_LifeCycle;
