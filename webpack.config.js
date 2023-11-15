const path = require('path'); // nodejs kurulumu ile geliyor.
// __dirname: webpack.config.js hangi dizinde ise onu belirtir
module.exports = {
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    devServer: {
        static: {
            directory: path.join(__dirname, "dist"),
        },
        historyApiFallback: true, // her seferinde kullaniciya index.html dondururur
        port: 9000
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: "babel-loader",
                exclude: /node_modules/
            },
            {
                test: /\.scss$/,
                use: ["style-loader", "css-loader", "sass-loader"]
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'file-loader',
                    },
                ],
            }

        ]
    }
}