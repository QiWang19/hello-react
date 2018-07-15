let count = 0;
const someId = 'myidhere'
const addOne= ()=>{
  count = count + 1;
  renderCounterApp();
  // console.log('addOne', count);
}

const minusOne = () => {
  count--;
  renderCounterApp();
  // console.log('minusOne');
}




const renderCounterApp = () => {
  const templateTwo = (
    <div>
      <h1>Count: {count}</h1>
      <button id={someId} className="button" onClick={addOne}>
      +1
      </button>
      <button onClick={minusOne}>-1</button>
    </div>
  );
  ReactDOM.render(templateTwo, appRoot);
};

renderCounterApp();