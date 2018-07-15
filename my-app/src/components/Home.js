import React, { Component } from 'react';

import PropTypes from 'prop-types';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      age: props.age
    }
    // this.age = this.props.age;
  }

  onMakeOlder() {
    // this.age += 3
    this.setState({
      age: this.state.age + 3
    })
    console.log(this.age)
  }

  render(){
    console.log(this.props);
    let content = ""
    if (true) {
      content = "hello";
    }
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-l col-xs-offset-11">
            <h1>home----</h1>
            <div>name is {this.props.name}, age is {this.state.age}</div>
            {content}
          </div>
          <button onClick={() => {this.onMakeOlder()}} className="btn btn-primary"> make me older</button>
          <div>
            {this.props.children}
          </div>
        </div>
      </div>
      
    );
    
  }
}

Home.PropTypes = {
  name: PropTypes.string,
  children: PropTypes.element.isRequired
}

export default Home;

