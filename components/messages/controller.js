const store = require('./store');

function addMessage(chat, user, message) {
    return new Promise((resolve, reject) => {
        if (!user || !message) {
            console.error('[messageController] No user or message')
            reject('Incorrect data') 
            return false;
        }

        let fileUrl = '';
        if(file) {
            fileUrl = 'http://localhost3000/app/files/' + file.filename;
        }
        const fullMessage = {
            chat: chat,
            user: user,
            message: message,
            date: new Date(),
            file: fileUrl,
        }
        store.add(fullMessage)
        resolve(fullMessage)
    })
}

function getMessage(filterUser) {
    return new Promise((resolve, reject) => {
        resolve(store.list(filterUser))
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

function deleteMessage(id) {
    return new Promise((resolve, reject) => {
        if (!id) {
            reject('Invalid Id')
            return false;
        }
        store.remove(id)
            .then(() => {
                resolve()
            })
            .catch(e => {
                reject(e);
            })
    })
}

module.exports = {
    addMessage,
    getMessage,
    updateMessage,
    deleteMessage
}