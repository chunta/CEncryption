// Nodejs encryption with CTR
var crypto = require('crypto'),
    algorithm = 'aes-256-ctr',
    password = 'd6F3Efeq';
var assert = require('assert');
function encrypt(text) {
  var cipher = crypto.createCipher(algorithm,password)
  var crypted = cipher.update(text,'utf8','hex')
  crypted += cipher.final('hex');
  return crypted;
}

function decrypt(text) {
  var decipher = crypto.createDecipher(algorithm,password)
  var dec = decipher.update(text,'hex','utf8')
  dec += decipher.final('utf8');
  return dec;
}

var hw = encrypt("hello world")
// outputs hello world
console.log(hw);
console.log(decrypt(hw));

function xorConvert (text, key) {
    var kL = key.length;

    return Array.prototype
        .slice.call(text)
        .map(function (c, index) {
            return String.fromCharCode(c.charCodeAt(0) ^ key[index % kL].charCodeAt(0));
        }).join('');
}

var key = "KCQ";
var txt = "kylewbanks.com";
var cipherText = xorConvert(txt, key);
console.log(cipherText);
assert(xorConvert(cipherText, key) === txt);

const express = require('express');
const app = express();
var bodyParser = require('body-parser')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.get('/',(req, res) => {
  res.send('\nHello World!');
});

app.post('/test', function(req, res) {
  console.log(req.body.command);
  const command = req.body.command;
  console.log(command);
  var decrypedText = xorConvert(command, key);
  console.log(decrypedText);
  res.send(decrypedText);
});

// POST method route
app.post('/', function (req, res) {
  console.log(req.body.command);
  res.send('POST request to the homepage');
});


app.listen(3000, () => {
  console.log('Listening on port 3000...');
});
