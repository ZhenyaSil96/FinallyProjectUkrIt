const path = require('path')


module.exports = {
entry:{main: './src/app.js'}, 
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public')
    },
    module: {
        rules: [
           {
              test: /\.css$/,
              use: [
                 'style-loader',
                 'css-loader'
              ]
           }
        ]
     }
   
}