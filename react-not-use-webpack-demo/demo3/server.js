var express = require('express');
var app = new express();

app.use(express.static(__dirname));

app.get('/',function (res, req) {
    res.sendfile('./index.html');
});

app.listen("3000");