import React, { Component } from 'react';


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
        </div>
      </div>
      
    );
    
  }
}

export default Home;

