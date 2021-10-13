const { render } = require('ejs');
var myModule = require('./my-module.js');

render(myModule.myText)