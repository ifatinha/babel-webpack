const path = require("path");

module.exports = {
   entry: {
      index: "./src/js/index.js",
      hello: "./src/js/hello.js"
   },

   mode: "development",

   output: {
      path: path.resolve(__dirname, 'public'),
      filename: "[name].min.js"
   },

   module: {
      rules: [
         {
            test: /\.js$/,
            exclude: "/node_modules/",
            use: {
               loader: "babel-loader"
            }
         },

         {
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
         }
      ]
   }
}