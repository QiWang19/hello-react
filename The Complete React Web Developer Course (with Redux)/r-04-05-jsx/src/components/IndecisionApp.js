import React from 'react';
import Header from './Header.js';
import Action from './Action.js';
import Options from './Options.js';
import AddOption from './AddOption.js';
import OptionModal from './OptionModal.js';

class IndecisionApp extends React.Component {
    state = {
      options: [],
      selectedOption: undefined,
    };
    // constructor(props) {
    //   super(props);
    //   this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    //   this.handlePick = this.handlePick.bind(this);
    //   this.handleAddOption = this.handleAddOption.bind(this);
    //   this.handleDeleteOption = this.handleDeleteOption.bind(this);
    //   this.state = {
    //     options: props.options,
    //   };
    // }
  
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
  
  
    handleDeleteOptions = () => {
      this.setState(() => ({options:[]}) );
    }
  
    handleDeleteOption = (optionToRemove) => {
      // console.log('hdo', option);
      this.setState((prevState)=>({
        options: prevState.options.filter((option)=>{
          return optionToRemove !== option;
        })
      }));
    }
  
  
    handlePick = () => {
      const randomNum = Math.floor(Math.random() * this.state.options.length);
      const option = this.state.options[randomNum];
      // alert(option);
      //!!! setState don't forget bracket
      this.setState(() => ({
        selectedOption: option
      }));
    }

    handleClearSelectedOption = () => {
      this.setState(() => ({
        selectedOption: undefined
      }));
    }
  
    handleAddOption = (option) => {
      // console.log(option);
      if (!option) {
        return 'Enter valid value to add item';
      } else if (this.state.options.indexOf(option) >-1) {
        return 'This option exists';
      } 
  
      this.setState( (prevState) => ({
        options: prevState.options.concat([option])
      }));
  
    }
  
    render() {
      // const title = 'Indecision';
      const subtitle = 'Put your life in the hands of a computer!'
      // const options = ['Thing one', 'Thing two', 'Thing three'];
      //no 'this' words
      return(
        <div>
          <Header  subtitle={subtitle}></Header>
          <div className="container">
            <Action hasOption={this.state.options.length > 0}
            handlePick={this.handlePick}
            ></Action>
            <div className="widget">
                <Options 
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions}
                    handleDeleteOption={this.handleDeleteOption}
                ></Options>
                <AddOption 
                    handleAddOption={this.handleAddOption}
                ></AddOption>
            </div>
          </div>
          <OptionModal 
            selectedOption={this.state.selectedOption}
            handleClearSelectedOption={this.handleClearSelectedOption}
          ></OptionModal>
        </div>
  
      )
    }
}
  
IndecisionApp.defaultProps = {
    options: []
};

export default IndecisionApp;
