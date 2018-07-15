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
```