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
    },
    module: {
        rules:[{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
        }]
    }
};

//loader: deal with a file
//install babel-core to run using webpack
//set module in webpack.config.js
//add .babelrc for babel using env & react