console.log('utils.js is running');

export const square = (x) => {
   return x * x;
}

const substract = (a, b) => a - b;
export{ substract as default};
// export {square};
//exports - default export - name exports
//import the exports variable from file