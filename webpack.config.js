// Include the html webpack plugin to simplify creation of html files
const HtmlWebPackPlugin = require("html-webpack-plugin");
const htmlPlugin = new HtmlWebPackPlugin({
    template: "./src/index.html",
    filename: "./index.html"
});

// Configuration module exports this object
module.exports = {
    // Dev mode for webpack
    mode: "development",
    // Module contents
    module: {
        rules: [
            {
                // Test For javascript files
                test: /\.js$/,
                // Don't include node modules
                exclude: /node_modules/,
                // Utilize babel for transpiling
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            }
        ]
    },
    plugins: [htmlPlugin]
};