/**
 * desc 加密、解密.
 **/
const crypto = require('crypto');
const key = 'China2018';

function cipherProc(data) {
    const cipher = crypto.createCipher('aes192', key);
    let encrypted = cipher.update(JSON.stringify(data), 'utf8', 'hex');
    encrypted += cipher.final('hex');
    return encrypted;
}

function deCipherProc(data) {
    const decipher = crypto.createDecipher('aes192', key);
    let decrypted = decipher.update(data, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    return decrypted;
}

module.exports = {
    cipherProc,
    deCipherProc
};
