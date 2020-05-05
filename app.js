var express = require(‘express’);
var port = process.env.PORT || 3000;
var app = express();
import LetsTry from './src/index'

app.get('', function (req, res) {
 res.send(LetsTry);
});
app.listen(port, function () {
 console.log(`Example app listening on port !`);
});