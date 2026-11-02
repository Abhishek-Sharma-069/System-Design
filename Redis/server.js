const express = require('express');
const axios = require('axios');
const client = require('./client');
const app = express();

app.get('/', async (req, res) => {

    const cacheData = await client.get('todos');

    if(cacheData){
        return res.send(JSON.parse(cacheData));
    }
    const response = await axios.get('https://jsonplaceholder.typicode.com/todos/');
    await client.set('todos', JSON.stringify(response.data));
    res.send(response.data);
});


app.listen(4000, () => {
    console.log('Server is running on port 4000');
});