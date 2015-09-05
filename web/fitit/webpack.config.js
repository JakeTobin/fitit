module.exports = {
    entry: ['./client/main.jsx'],
    output: {
        path: './public',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: 'style!css' },
            { test: /\.jsx?$/, loader: 'jsx-loader' },
            { test: /\.json$/, loader: 'json-loader'},
            //{
            //    test: /\.jsx?$/,
            //    exclude: /(node_modules|bower_components)/,
            //    loader: 'babel',
            //    query: {
            //        optional: ['runtime'],
            //        stage: 0
            //    }
            //}

           // { "json5": "json5-loader"}


        ]
    },
    plugins: []
};
