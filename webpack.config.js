const path = require("path");

module.exports = {
    mode: "development",
    entry: "./src/index.js",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist"),
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.(jpeg|png|jfif|jpg)$/i,
                type: "asset/resource",
            },
            {
                test: /\.csv$/i,
                use: ["csv-loader"],
            },
        ],
    },
};
