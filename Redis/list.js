const client = require('./client');

async function init(){
    await client.lpush('messagesw','Hello1');
    await client.lpush('messagesw','Hello2');
    await  client.lpush('messagesw','Hello3');
    const result = await client.lpop('messagesw');
    console.log("result =>", result);

}

init();

console.log('List of messages =>', async () => {
    return await client.lrange('messagesw', 0, -1);
});