import colors from 'colors';
const express = require('express');
const webpack = require('webpack');
const path = require('path');
const config = require('../webpack.config.dev');
const open = require('open');

/* eslint-disable no-console */

const compiler = webpack(config);
const port = 3000;

const app = express()
    .use(require('webpack-dev-middleware') (compiler, {
      noInfo: true,
      publicPath: config.output.publicPath
    }))
    .get('*', function (req, res) { res.sendFile(path.join(__dirname, '../src/index.html')); })
    .listen(port, function (err) { if (err) { console.log(err); } else { open(`http://localhost:${port}`);} });


console.log(`Src Server is running at port:${port}.`.green);

