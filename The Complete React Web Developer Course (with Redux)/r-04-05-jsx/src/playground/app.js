

class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);
    this.state = {
      options: props.options,
    };
  }

  componentDidMount() {
    //deal with invalid json parse arguemnt
    try{
      const json = localStorage.getItem('options');
      const options = JSON.parse(json);
      if (options) {
        this.setState(()=>({
          options: options
        }));
      }
    } catch(e) {
      //Do nothing
    }
    
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      //convert object to string
      const json = JSON.stringify(this.state.options);
      //store key value pair to localStorage
      localStorage.setItem('options', json);
      console.log('saving data');
    }
  }
  componentWillUnmount() {
    console.log('componentWillUnmount');
  }


  handleDeleteOptions() {
    // this.setState(()=>{
    //   return {
    //     options:[]
    //   };
    // });
    this.setState(() => ({options:[]}) );
  }

  handleDeleteOption(optionToRemove) {
    // console.log('hdo', option);
    this.setState((prevState)=>({
      options: prevState.options.filter((option)=>{
        return optionToRemove !== option;
      })
    }));
  }


  handlePick() {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    alert(option);
  }

  handleAddOption(option) {
    // console.log(option);
    if (!option) {
      return 'Enter valid value to add item';
    } else if (this.state.options.indexOf(option) >-1) {
      return 'This option exists';
    } 

    this.setState( (prevState) => ({
      options: prevState.options.concat([option])
    }));


    // this.setState((prevState)=> {
    //   return {
    //     options: prevState.options.concat([option]) 
    //   };
    // });
  }

  render() {
    // const title = 'Indecision';
    const subtitle = 'Put your life in the hands of a computer!'
    // const options = ['Thing one', 'Thing two', 'Thing three'];
    //no 'this' words
    return(
      <div>
        <Header  subtitle={subtitle}></Header>
        <Action hasOption={this.state.options.length > 0}
         handlePick={this.handlePick}
        ></Action>
        <Options 
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
          handleDeleteOption={this.handleDeleteOption}
        ></Options>
        <AddOption 
          handleAddOption={this.handleAddOption}
        ></AddOption>
      </div>

    )
  }
}

IndecisionApp.defaultProps = {
  options: []
};

const Header = (props) => {
    return (
      <div>
        <h1>{props.title}</h1>
        {props.subtitle && <h2>{props.subtitle}</h2>}
      </div>
    );
};

Header.defaultProps = {
  title: 'Indecision'
};

// class Header extends React.Component {
//   render() {
//     return (
//       <div>
//         <h1>{this.props.title}</h1>
//         <h2>{this.props.subtitle}</h2>
//       </div>
//     );
//   }
// }

const Action = (props) => {
  return (
    <div>
      <button onClick={props.handlePick}
        disabled={!props.hasOption}
        >
          What should I do?
        </button>
    </div>
  );
}

// class Action extends React.Component {
//   // handlePick() {
//   //   alert('handlePick');
//   // }
//   render() {
//     return (
//       <div>
//         <button onClick={this.props.handlePick}
//         disabled={!this.props.hasOption}
//         >
//           What should I do?
//         </button>
//       </div>
//     )
//   }
// }

const Options = (props) => {
  return (
    <div>
      
      <button onClick={props.handleDeleteOptions}> Remove All</button>
      {props.options.length === 0 && <p>Please add an option to get started!</p>}
      {
        //no curly braces
        props.options.map((option) => 
        <Option 
          key={option} 
          optionText={option}
          handleDeleteOption={props.handleDeleteOption}
        />)
        
      }
    </div>
  );
}

// class Options extends React.Component {

//   // constructor(props) {
//   //   super(props);
//   //   this.handleRemoveAll = this.handleRemoveAll.bind(this);
//   // }

//   // handleRemoveAll() {
//   //   // this.props.options = [];
//   //   alert(this.props.options);
//   // }

//   render() {
//     return (
//       <div>
        
//         <button onClick={this.props.handleDeleteOptions}> Remove All</button>
//         {
//           //no curly braces
//           this.props.options.map((option) => 
//           <Option key={option} optionText={option}/>)
          
//         }
//       </div>
//     );
//   }
// }

const Option = (props) => {
  return (
    <div>
      {/* Option component here */}
      Option: {props.optionText}
      {/* <button 
        onClick={props.handleDeleteOption}
      > */}
      <button 
        onClick={() =>{
          props.handleDeleteOption(props.optionText);
        }}
      >
        remove
      </button>
    </div>
  );
}

// class Option extends React.Component {
//   render() {
//     return (
//       <div>
//         {/* Option component here */}
//         Option: {this.props.optionText}
//       </div>
//     );
//   }
// }



class AddOption extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      error: undefined
    };
  }

  handleAddOption(e) {
    e.preventDefault();
    //<input name='option'>
    const option = e.target.elements.option.value.trim();
    const error =  this.props.handleAddOption(option);

    this.setState(()=>({
      error:error
    }));

    if (!error) {
      e.target.elements.option.value = ' ';
    }

    // this.setState(()=>{
    //   return {
    //     error: error
    //   }
    // })

    // if (option) {
    //   this.props.handleAddOption(option);
    // }
  }
  
  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option"></input>
          <button>AddOption component here</button>
        </form>          
      </div>
    );
  }
}

// dif between component VS html element

//no 'this' words
// const User = (props) => {
//   return (
//     <div>
//       <p>Name: {props.name}</p>
//       <p>Age: </p>
//     </div>
//   );
// };

ReactDOM.render(<IndecisionApp/>, document.getElementById('app'));
// ReactDOM.render(<User name="Andrew"/>, document.getElementById('app'));