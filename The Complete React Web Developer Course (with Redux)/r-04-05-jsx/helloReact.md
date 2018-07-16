## Hello React

### Conditional JSX  

babel src/playground/es6-let-const.js --out-file=public/scripts/app.js --presets=env,react --watch

```javascript
var app = {
  title: 'tt',
  subtitle:'sb',
  options:['One', 'Two']
};
var user = {
  name: 'Andrew',
  age:26,
  location: 'zoo'
}
var templateTwo = (
  <div>
    {<h1>{app.title}</h1>}
    <p>{app.subtitle}</p>
    <p>{user.name ? user.name : 'Anonymous'}</p>
    {(user.age) &&(user.age >= 18) && <p>Age:{user.age}</p>}
    {/* <p>Location:{getLocation(user.location)}</p> */}
    {getLocation(user.location)}
    {(app.subtitle && <p>{app.subtitle}</p>)}
    {app.options.length > 0 ? <p>Here are your options</p> : <p>No options</p>}
  </div>
);
```

### Arrow function  

```javascript
const square = function (x) {
    return x * x;
}

console.log(square(8));

const squareArrow = (x) => {
    return x * x;
};

const getFirstName = (str) => str.split(' ')[0];
console.log(getFirstName('ha ah'));
```

'this' keyword no longer bound 

```javascript
var user = {
    name: 'Andrew',
    cities: ['Philadelphia', 'New York', 'Dublin'],
    //printPlacesLived: ()=> { doesnot work
    //
    //printPlacesLived() {
    printPlacesLived: function () {
        console.log(this.name);
        console.log(this.cities);
        /** 'this does not work'
         this.cities.forEach(function(city){
           console.log(this.name + city);
         });
         **/
        //arrow function works fine
        this.cities.forEach((city)=> {
          console.log(this.name + city);
        });
    }

};
user.printPlacesLived();

```

map function

```javascript
printPlacesLived: function () {
    const cityMessages = this.cities.map((city)=>{
        return city;
    })
    return cityMessages;
}
``` 

### Array of JSX  

1. render an array  
2. 'key' React之key详解 https://cnblogs.com/wonyun/p/6743988.html
```javascript
{app.option.length > 0 && 
          app.option.map((opt)=>{
            return <li key={opt}>{opt}</li>;
          })
        }

```   

### ES6 Class  

ES6 string  

```javascript
return `Hi I am ${this.name}`;
```  

Create class  

```javascript
class Person {
    constructor(name = 'Anonymous', age = 0) {
        // console.log('test');
        //refer to class instance
        this.name = name;
        this.age = age;
    }
    getGreeting() {
        // return 'I am' + this.name + 'Hi!';
        return `Hi I am ${this.name}`;
    }

    getDescription() {
        return `${this.name} is ${this.age} years old`;
    }
}

const me = new Person('QI WANG');
const other = new Person(undefined, 26);
console.log(me.getGreeting());
```  

Create subclasses  

```javascript
class Student extends Person{
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }
    hasMajor() {
        return !!this.major;
    }

    getDescription() {
      //override method
        let description = super.getDescription();
        if (this.hasMajor()) {
            description += ` Their major is ${this.major}.`;
        }
        return description;
    }
}
```  

### Create React Component with ES6 and React  



```javascript
class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>Indecision</h1>
        <h2>Put your life in the hands of a computer</h2>
      </div>
    );
  }
}

// dif between component VS html element
const jsx = (
  <div>
    <h1>
      Title
    </h1>
    <Header></Header>
  </div>
);

ReactDOM.render(jsx, document.getElementById('app'));

```

Put four component render in one component  

```javascript
class IndecisionApp extends React.Component {
  render() {
    return(
      <div>
        <Header></Header>
        <Action></Action>
        <Options></Options>
        <AddOption></AddOption>
      </div>

    )
  }
}
ReactDOM.render(<IndecisionApp/>, document.getElementById('app'));
```  

### Component Props   

Data like the '<Header></Header>' title  

```javascript
class Options extends React.Component {
  render() {
    return (
      <div>
        Options Component here!
        {/* {this.props.options.length} */}

        {
          //no curly braces
          this.props.options.map((option) => 
          <p key={option}>{option}</p>)
          
        }
      </div>
    );
  }
}
```  

### Events & Methods   

1. handleOption函数有参数  

```javascript
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
```  

### Method binding  
‘this’ callback 问题，解决方案 https://medium.freecodecamp.org/react-binding-patterns-5-approaches-for-handling-this-92c651b5af56  
mdn bind

```javascript
const obj = {
  name: 'Vikram',
  getName() {
    return this.name;
  }
};

const getName = obj.getName.bind(obj);
console.log(getName());
```  

1. even handler loose binding  
2. override constructor function for React component

```javascript
//binding
class Options extends React.Component {

  handleRemoveAll() {
    // this.props.options = [];
    alert('remove');
  }

  render() {
    return (
      <div>
        
        <button onClick={this.handleRemoveAll.bind(this)}> Remove All</button>
        {
          //no curly braces
          this.props.options.map((option) => 
          <Option key={option} optionText={option}/>)
          
        }
      </div>
    );
  }
}
```   

constructor function  

```javascript
constructor(props) {
    super(props);
    this.handleRemoveAll = this.handleRemoveAll.bind(this);
  }
```

### Component State  

1. Setup default state object
2. Component rendered with default state values  
3. Changes state based on event  
4. Component re-rendered using new state values  
5. Start again at 3

#### Part I add stste to counter app 

  create funcions and bind 

```javascript
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
```

#### Part II  

use setState function, 'prevState' 参数(optional), return an object  

```javascript
handleMinusOne() {
    this.setState((prevState)=>{
      return {
        count: prevState.count - 1
      };
    });
  }
```  

#### Alternative ways setState  

Without using setState function has asynchronous problem. Useing update function is better.

#### Indecision State Part I  

Reverse data flow  
Parents ----------(pass function to cild)-----------> Child  
        <--(change parents state through function)  

```javascript
<Options 
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
        ></Options>
```