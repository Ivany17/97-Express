const express = require('express');
const validate = require('./middleware/validate.mw');
const userController = require('./controllers/userController');

const app = express(); //create server
const PORT = 3000;

const parseBody = express.json();

app.get('/users', userController.showUsers);
app.post('/user', parseBody, validate, userController.createUser);
// app.put('/user/:id', parseBody, validate, updateUser);
// app.delete('/user/:id', deleteUsers);

app.listen(PORT, () => {
    console.log('server started at port ' + PORT)
});