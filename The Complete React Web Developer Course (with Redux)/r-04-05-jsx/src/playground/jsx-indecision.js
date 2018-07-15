console.log('App.js is running!');
var appRoot = document.getElementById('app');

const app = {
  title: 'Indecision App',
  subtitle: 'Put your life in the hands of a computer',
  option:[]
};
const onFormSubmit = (e) => {
  e.preventDefault();
  const option = e.target.elements.option.value;
  // console.log('form submitted');
  if (option) {
    app.option.push(option);
    e.target.elements.option.value = '';
  }
  render();
}

const onRemoveAll = () => {
  app.option = [];
  render();
};

const onMakeDecision=() => {
  const randomNum = Math.floor((Math.random() * app.option.length));
  const option = app.option[randomNum];
  alert(option);
};

const numbers = [55, 101, 1000];

const render = () => {
  // JSX - JavaScript XML
  var template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      <p>{app.option.length > 0 ? 'Here are your options': 
        'No options'}</p>
      <p>{app.option.length}</p>
      <button disabled={app.option.length === 0} onClick={onMakeDecision}>What should I do?</button>
      <button onClick={onRemoveAll}>Remove All</button>
      
      <ol>
        {app.option.length > 0 && 
          app.option.map((opt)=>{
            return <li key={opt}>{opt}</li>;
          })
        }

      </ol>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option"></input>
        <button>Add Option</button>
      </form>
      
    </div>
  );
  ReactDOM.render(template, appRoot);
};
render();