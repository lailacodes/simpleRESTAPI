const exp = require('express');
const app = exp();
const path = require('path');

app.use(exp.static(path.join(__dirname,"public")))

app.all('/grade',function (req, res, next) {
    console.log("Request on /grade is received");
    next();
});

app.get('/grade', function (req, res) {
    res.status(200);
    console.log('Got a GET request at /grade');
    res.send('Got a GET request at /grade');
});
app.post('/grade', function (req, res) {
    res.status(200);
    console.log('Got a POST request at /grade');
    res.send('Got a POST request at /grade');
});
app.put('/grade', function (req, res) {
    console.log('Got a PUT request at /grade');
    res.send('Got a PUT request at /grade');
});
app.delete('/grade', function (req, res) {
    res.status(200);
    console.log('Got a DELETE request at /grade');
    res.send('Got a DELETE request at /grade');
});

app.listen(3000,function () {
    console.log("App started listening on port 3000")
});