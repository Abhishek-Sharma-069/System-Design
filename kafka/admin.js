const { kafka } = require('./client');

async function init()
{
    const admin = kafka.admin();
    console.log('Connecting Admin...');
    admin.connect();
    console.log('Connected Admin...');

    console.log('Creating Topics...');
    await admin.createTopics({
        topics: [{topic: 'rider-updates', numPartitions: 2}],
    })
    console.log('Created Topics...');

    console.log('Disconnecting Admin...');
    await admin.disconnect();
    console.log('Disconnected Admin...');
    
}

init().catch(console.error);