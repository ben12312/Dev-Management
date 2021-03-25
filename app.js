const router = require('./routes/router');
const session = require('express-session')
const express = require('express');
const app = express();
const port = 3000;

app.use(session({
    secret: 'IO-dev',
    resave: false,
    saveUninitialized: true
}))

app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: true }))

app.use('/', router);

app.listen(port, () => {
    console.log(`Server is running in port ${port}...`);
})