const express = require('express');
const app = express();

app.set('view engine', 'ejs');
const port = 3000;
const mysql = require('mysql');
const headermenu = '<div class="" style="height: 3rem; background: red; color: #fff; position: fixed; left: 0;top: 0; width: 100%;"><a href="./about">About</a><a href="./">Home</a></div><br><br>';


app.get('/', (req, res) => {
let resulto = [];
let titler = 'Ass Piss';
let word = '';

const connection = mysql.createConnection({
  host: 'sql2.freemysqlhosting.net',
  user: 'sql2603309',
  password: 'hQ8%rF6!',
  database: 'sql2603309',
})


connection.connect(function(err) {
  if (err) throw err;
  connection.query("SELECT * FROM day_1", function (err, result, fields) {
    if (err) throw err;

for (const key in result) {
    resulto.push(result[key].name);
}
  });
});


// res.send(headermenu+'<div id="" class="resulto">'+titler+'<br>'+setTimeout(function(){ renderStuff(3) }, 1000)+'</div>');
setTimeout(function(){ 
res.render('index', 
  {
    title:'Homepage',
    day: 'Day One',
    database: resulto
  }
);
}, 1000);

})

app.get('/about', (req, res) => {
app.use(express.static(__dirname + '/static'));
	res.send(headermenu+'<img name="picture" src="/images/square-logo.jpg" class="card-img-profile pro-img" id="picture" />');
})

app.listen(port, () => console.log('running with the tits'));

