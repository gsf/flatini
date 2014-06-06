# flatini
An ini parser without namespacing. Ripped from the decoding half of 
https://github.com/isaacs/ini.

```js
var flatini = require('flatini');
var parsed = flatini(fs.readFileSync('inifile.conf'));
```
