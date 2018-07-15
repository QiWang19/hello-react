// let count = 0;
// const someId = 'myidhere'
// const addOne= ()=>{
//   count = count + 1;
//   renderCounterApp();
//   // console.log('addOne', count);
// }

// const minusOne = () => {
//   count--;
//   renderCounterApp();
//   // console.log('minusOne');
// }




// const renderCounterApp = () => {
//   const templateTwo = (
//     <div>
//       <h1>Count: {count}</h1>
//       <button id={someId} className="button" onClick={addOne}>
//       +1
//       </button>
//       <button onClick={minusOne}>-1</button>
//     </div>
//   );
//   ReactDOM.render(templateTwo, appRoot);
// };

// renderCounterApp();

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOne= this.handleAddOne.bind(this);
    this.handleMinusOne = this.handleMinusOne.bind(this);
    this.handleReset = this.handleReset.bind(this);
  }
  handleAddOne() {
    alert()
  }
  handleMinusOne() {

  }
  handleReset() {

  } 
  render() {
    return (
      <div>
        <h1>Count: </h1>
        <button onClick={this.handleAddOne}>+1</button>
        <button onClick={this.handleMinusOne}>-1</button>
        <button onClick={this.handleReset}>reset</button>
      </div>
    );
  }
}

ReactDOM.render(<Counter/>, document.getElementById('app'));