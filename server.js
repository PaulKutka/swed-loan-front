/**
 * Created by paulius on 17.2.23.
 */
var gzippo = require('gzippo');
const express = require('express');
const app = express();
var logger = require('morgan');
app.use(logger);

app.use(express.logger('dev'));
app.use(gzippo.staticGzip("" + __dirname + "/dist"));
app.listen(process.env.PORT || 5000);
