var express = require('express')

var todoController = require('./Controllers/todoController')

var app = express()
//set up the template engine
app.set('view engine', 'ejs')

//static files
app.use(express.static('./a/public'))
// fire the controller
todoController(app)

//localhost:300/assets/styles.css

//listen to the port

app.listen(1300)

console.log("you are listining the port 1300")