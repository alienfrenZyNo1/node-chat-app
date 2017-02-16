const path = require('path');
const express = require('express');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;
var app = express();

app.use(express.static(publicPath));


//listen for requests
app.listen(3000, () => {
	console.log(`Started up at port ${port}`);
});

module.exports = {app};