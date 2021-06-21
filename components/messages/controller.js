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
        console.log(fullMessage);
        resolve(fullMessage)
    })
}

module.exports = {
    addMessage
}