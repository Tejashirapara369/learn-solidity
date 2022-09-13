const path = require('path');
const fs = require('fs');
const solc = require('solc');

const inboxPath = path.resolve(__dirname, 'contracts', 'Inbox.sol');
console.log('inboxPath', inboxPath)
const source = fs.readFileSync(inboxPath, 'utf-8');
console.log('solc.compile(source, 1).contracts[:Inbox]', solc.compile(source, 1).contracts[':Inbox'])
module.exports = solc.compile(source, 1).contracts[':Inbox'];

