/**
 * Created by weiqiujuan on 17-9-25.
 */
const crypto = require('crypto');

const hash = crypto.createHash('md5');
const hmac = crypto.createHmac('sha256', 'secret-key');

hash.update('hello,weiqiujuan');
hmac.update('hello,weiqiujuan');

console.log(hash.digest('hex'));
console.log(hmac.digest('hex'));

//ASE对称加密算法
function aesEncrypt(data, key) {
    const cipher = crypto.createCipher('aes192', key);
    let crypted = cipher.update(data, 'utf8', 'hex');
    crypted += cipher.final('hex');
    return crypted;
}
function aesDecrypt(encrypted, key) {
    const decipher = crypto.createDecipher('aes192', key);
    let decrypted = decipher.update(encrypted, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    return decrypted;
}
let data = 'hello,weiqiujuan';
let key = 'Password!';
let encrypted = aesEncrypt(data, key);
let decrypted = aesDecrypt(encrypted, key);

console.log('Plain text:' + data);
console.log('Encrypted text:' + encrypted);
console.log('Decrypted text:' + decrypted);

//DH密钥交换协议
let wei = crypto.createDiffieHellman(512);
let wei_key = wei.generateKeys();

let prime = wei.getPrime();
let generator = wei.getGenerator();

console.log('Prime:' + prime.toString('hex'));
console.log('Generator:' + generator.toString('hex'));

let zhao = crypto.createDiffieHellman(prime, generator);
let zhao_key = zhao.generateKeys();

let wei_serect = wei.computeSecret(zhao_key);
let zhao_serect = zhao.computeSecret(wei_key);

console.log('secrect of wei' + wei_serect.toString('hex'));
console.log('secrect of zhao' + zhao_serect.toString('hex'));
