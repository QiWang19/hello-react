import React, { Component } from 'react';

import PropTypes from 'prop-types';

class Home extends Component {
  

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
            <div>name is {this.props.name}, age is {this.props.age}</div>
            {content}
          </div>
          <button class="btn btn-primary"> make me order</button>
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

