'use strict';

var gzippo = require('gzippo');
var express = require('express');
var nodeApp = express();

nodeApp.use(express.logger('dev'));
nodeApp.use(gzippo.staticGzip('' + __dirname + '/dist'));
nodeApp.listen(process.env.PORT || 5000);


