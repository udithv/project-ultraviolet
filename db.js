const levelup = require('levelup');
const leveldown = require('leveldown');

//current active process db
const cdb =  levelup(leveldown('./db/current'));
const dockdb = levelup(leveldown('./db/dock'));

module.exports = {
    cdb,
    dockdb
};