// parse-conf.js

var flatini = require('..');
var fs = require('fs');

var parsed = flatini(fs.readFileSync(__dirname + '/inifile.conf', 'utf8'));
console.log(parsed);
