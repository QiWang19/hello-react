//install-import-use

import React from 'react';
import ReactDOM from 'react-dom';
 
import './styles/styles.scss';
import 'normalize.css/normalize.css'
ReactDOM.render(<p>This is my boilerplate</p>, document.getElementById('app'));
console.log(React.version);
// class OldSyntax {
//     constructor() {
//         this.name = 'Milk';
//         this.getGreeting = this.getGreeting.bind(this);
//         this.arr = [1,2,3];
//     }
//     getGreeting() {
//         // return  `${this.name}`;
//         let b = this.arr.map(this.func);
//         console.log(b);
//     }

//     func(num) {
//         return num * 2;
//     }
    
// }

// const oldSyntax = new OldSyntax();
// console.log(oldSyntax);
// console.log(oldSyntax.getGreeting());
// //----------------

// class NewSyntax {
//     name = 'Jane';
//     getGreeting = () => {
//         return  `${this.name}`;
//     }
// }
// const newSyntax = new NewSyntax();
// console.log(newSyntax);
// const newGetGreeting = newSyntax.getGreeting;
// console.log(newGetGreeting());
