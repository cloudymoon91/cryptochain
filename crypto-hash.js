const crypto = require('crypto');
// const hextToBinary = require('hex-to-binary');

const cryptoHash = (...inputs) => {
    const hash = crypto.createHash('sha256');

    hash.update(inputs.sort().join(' '));

    // return hextToBinary(hash.digest('hex'));
    return hash.digest('hex');
};

module.exports = cryptoHash;