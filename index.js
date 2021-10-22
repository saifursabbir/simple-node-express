const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());
app.get('/', (req, res) => {
    res.send('Hii, that From My first even node , WOW with NodeMon atumatic resrt')
});
const users = [

    { id: 0, name: 'Shabana', email: 'shahbana@gmail.com', number: '017885552221' },
    { id: 1, name: 'Shabnoor', email: 'Shabnoor@gmail.com', number: '017885552221' },
    { id: 2, name: 'Shabonthi', email: 'Shabonthi@gmail.com', number: '017885552221' },
    { id: 3, name: 'Shusorita', email: 'Shusorita@gmail.com', number: '017885552221' },
    { id: 4, name: 'Shusmita', email: 'shahbana@gmail.com', number: '017885552221' },
    { id: 5, name: 'Suniya', email: 'Suniya@gmail.com', number: '017885552221' },
    { id: 6, name: 'Shusmita', email: 'Shusmita@gmail.com', number: '017885552221' },
];


app.get('/users', (req, res) => {
    const search = req.query.search;
    // user query parameter
    if (search) {
        const searchResult = users.filter(user => user.name.toLocaleLowerCase().includes(search));
        res.send(searchResult);
    }
    else {
        res.send(users);
    }
})
// APP METHOD 
app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser)
    console.log('hitting the post', req.body);
    // res.send(JSON.stringify(newUser))
    res.json(newUser)
})

// dynamic api 
app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id]
    res.send(user)
})
app.listen(port, () => {
    console.log('listen to port', port);
})