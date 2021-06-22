const db = require('mongoose');
const Model = require('./model')

const uri = 'mongodb://db_user_platzibackend:bLawWIFGJk69ZUHU@cluster0-shard-00-00.shvvz.mongodb.net:27017,cluster0-shard-00-01.shvvz.mongodb.net:27017,cluster0-shard-00-02.shvvz.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-h6uac6-shard-0&authSource=admin&retryWrites=true&w=majority';

db.Promise = global.Promise;

db.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('[db] Correctly connected'))
    .catch(err => console.error('[db]', err))

function addMessage(message) {
    const myMessage = new Model(message);
    myMessage.save();
}

async function getMessage() {
    //return list
    const messages = await Model.find();
    return messages;
}

module.exports = {
    add: addMessage,
    list: getMessage
}