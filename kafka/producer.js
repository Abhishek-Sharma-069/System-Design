const {kafka} = require('./client');

async function init(){
    const producer = kafka.producer();
    console.log('Connecting Producer...');
    await producer.connect();
    console.log('Connected Producer...');
    
    console.log('Sending Messages...');
    await producer.send({
        topic: 'rider-updates',
        messages: [
            
            {partition:0, key:'location-update', value: JSON.stringify({riderId: 1, location:'north'})},

        ],
    });
    console.log('Sent Messages...');
    await producer.disconnect();
}

init().catch(console.error);