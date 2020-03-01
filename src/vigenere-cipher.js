class VigenereCipheringMachine {
    constructor(direction = true){
        this.direction = direction;
    }
    encrypt(message, key) {
        return this.worker(message, key, true);
    }

    decrypt(encryptedMessage, key) {
        return this.worker(encryptedMessage, key, false);
    }

    worker (message, key, encrypt = true) {
        let resultString = "";
        let counter = 0;
        const messageUpper = message.toUpperCase();
        const keyUpper = key.toUpperCase();
        for (let i = 0; i < message.length; i++) {
            const code = messageUpper.charCodeAt(i) - 65;
            if (code >= 0 && code <= 25) {
                const keyCode = keyUpper.charCodeAt(counter % key.length) - 65;
                let resultCode;
                if (encrypt) {
                    resultCode = (code + keyCode) <= 25 ? code + keyCode : (code + keyCode) - 26;
                } else {
                    resultCode = (code - keyCode)  >= 0 ? code - keyCode : (code - keyCode) + 26;
                }
                resultString += String.fromCharCode(resultCode + 65);
                counter++;
            } else {
                resultString += message[i];
            }
        }
        return this.direction ? resultString : resultString.split('').reverse().join('');
    }
}

module.exports = VigenereCipheringMachine;