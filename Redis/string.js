const client = require('./client');

async function init()
{
    const result = await  client.get('name');

    console.log("result =>", result);
}

init();