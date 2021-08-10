const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => res.render('index', { foo: 'FOO'}));

app.listen(port, () => console.log('App listening on port', port));