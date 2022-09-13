const path = require('path');
const fs = require('fs');
const solc = require('solc');

const inboxPath = path.resolve(__dirname, 'contracts', 'Inbox.sol');
console.log('inboxPath', inboxPath)
const source = fs.readFileSync(inboxPath, 'utf-8');

module.exports = solc.compile(source, 1);

