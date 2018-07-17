//nodejs
const path = require('path')
// console.log(path.join(__dirname, 'public'));

//entry -> output
//expose something(object) to another file
//all of code into one file called bundle.js put 
//it to 'path'(absolute)
//join absolute with local path 
module.exports = {
    entry: './src/app.js',
    output:{
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    }
};