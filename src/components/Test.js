import React, { Component } from 'react';

class Test extends Component {
  state = {
    title: 'test',
    userId: 'body test'
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(data => this.setState({title: data.title, userId: data.userId}))
  }

  render(){
    return (
      <div>
        <h1>{this.state.title}</h1>
        <p>{this.state.userId}</p>
      </div>
    );
  }
}

export default Test;
