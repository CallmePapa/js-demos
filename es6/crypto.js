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
    var crypted = cipher.update(data, 'utf8', 'hex');
    crypted += cipher.final('hex');
    return crypted;
}
function aesDecrypt(encrypted, key) {
    const decipher = crypto.createDecipher('aes192', key);
    var decrypted = decipher.update(encrypted, 'hex', 'utf8');
    decrypted += decipher.final('utf8');
    return decrypted;
}
var data = 'hello,weiqiujuan';
var key = 'Password!';
var encrypted = aesEncrypt(data, key);
var decrypted = aesDecrypt(encrypted, key);

console.log('Plain text:' + data);
console.log('Encrypted text:' + encrypted);
console.log('Decrypted text:' + decrypted);

//DH密钥交换协议
var wei = crypto.createDiffieHellman(512);
var wei_key = wei.generateKeys();

var prime = wei.getPrime();
var generator = wei.getGenerator();

console.log('Prime:' + prime.toString('hex'));
console.log('Generator:' + generator.toString('hex'));

var zhao = crypto.createDiffieHellman(prime, generator);
var zhao_key = zhao.generateKeys();

var wei_serect = wei.computeSecret(zhao_key);
var zhao_serect = zhao.computeSecret(wei_key);

console.log('secrect of wei' + wei_serect.toString('hex'));
console.log('secrect of zhao' + zhao_serect.toString('hex'));
