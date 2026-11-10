const {kafka} = require('./client');

async function init(){
    const consumer = kafka.consumer({groupId: 'rider-group'});
    console.log('Connecting Consumer...');
    await consumer.connect();
    console.log('Connected Consumer...');

    console.log('Subscribing to Topic...');
    await consumer.subscribe({topic: 'rider-updates', fromBeginning: true});
    console.log('Subscribed to Topic...');

    console.log('Consuming Messages...');
    await consumer.run({
        eachMessage: async ({ride, partition, message,heartbeat,pause}) => {
            console.log({
                partition,
                offset: message.offset,
                key: message.key.toString(),
                value: message.value.toString(),
            });
        },
    });
}

init().catch(console.error);