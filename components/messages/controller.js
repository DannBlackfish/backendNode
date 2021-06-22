const store = require('./store');

function addMessage(user, message) {
    return new Promise((resolve, reject) => {
        if (!user || !message) {
            console.error('[messageController] No user or message')
            reject('Incorrect data') 
            return false;
        }
        const fullMessage = {
            user: user,
            message: message,
            date: new Date(),
        }
        store.add(fullMessage)
        resolve(fullMessage)
    })
}

function getMessage() {
    return new Promise((resolve, reject) => {
        resolve(store.list())
    });
}

function updateMessage(id, message) {
    return new Promise(async (resolve, reject) => {
        console.log(id);
        console.log(message)
        if (!id || !message) {
            reject('Invalid data');
            return false;
        }
        const result = await store.updateText(id, message);
        resolve(result);
    })
}


module.exports = {
    addMessage,
    getMessage,
    updateMessage
}