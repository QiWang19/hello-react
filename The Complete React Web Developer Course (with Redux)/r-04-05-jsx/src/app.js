

class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.state = {
      options: ['Thing one', 'Thing two', 'Thing three'],
    };
  }

  handleDeleteOptions() {
    this.setState(()=>{
      return {
        options:[]
      };
    });
  }


  render() {
    const title = 'Indecision';
    const subtitle = 'Put your life in the hands of a computer!'
    // const options = ['Thing one', 'Thing two', 'Thing three'];
    //no 'this' words
    return(
      <div>
        <Header title={title} subtitle={subtitle}></Header>
        <Action hasOption={this.state.options.length > 0}></Action>
        <Options 
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
        ></Options>
        <AddOption></AddOption>
      </div>

    )
  }
}

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
      </div>
    );
  }
}

class Action extends React.Component {
  handlePick() {
    alert('handlePick');
  }
  render() {
    return (
      <div>
        <button onClick={this.handlePick}
        disabled={!this.props.hasOption}
        >
          What should I do?
        </button>
      </div>
    )
  }
}

class Options extends React.Component {

  // constructor(props) {
  //   super(props);
  //   this.handleRemoveAll = this.handleRemoveAll.bind(this);
  // }

  // handleRemoveAll() {
  //   // this.props.options = [];
  //   alert(this.props.options);
  // }

  render() {
    return (
      <div>
        
        <button onClick={this.props.handleDeleteOptions}> Remove All</button>
        {
          //no curly braces
          this.props.options.map((option) => 
          <Option key={option} optionText={option}/>)
          
        }
      </div>
    );
  }
}



class Option extends React.Component {
  render() {
    return (
      <div>
        {/* Option component here */}
        Option: {this.props.optionText}
      </div>
    );
  }
}



class AddOption extends React.Component {

  handleAddOption(e) {
    e.preventDefault();
    const option = e.target.elements.option.value.trim();
    if (option) {
      alert(option);
    }
  }
  
  render() {
    return (
      <div>
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option"></input>
          <button>AddOption component here</button>
        </form>          
      </div>
    );
  }
}

// dif between component VS html element


ReactDOM.render(<IndecisionApp/>, document.getElementById('app'));