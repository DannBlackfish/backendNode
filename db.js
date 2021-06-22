const db = require('mongoose');

db.Promise = global.Promise;
//    const uri = 'mongodb://db_user_platzibackend:bLawWIFGJk69ZUHU@cluster0-shard-00-00.shvvz.mongodb.net:27017,cluster0-shard-00-01.shvvz.mongodb.net:27017,cluster0-shard-00-02.shvvz.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-h6uac6-shard-0&authSource=admin&retryWrites=true&w=majority';

async function connect (url) {
    await db.connect(url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
        console.log('[db] Conectada')
}

module.exports = connect;