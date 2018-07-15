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