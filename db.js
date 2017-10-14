const levelup = require('levelup');
const leveldown = require('leveldown');
const path = require('path');

//current active process db
const cdb =  levelup(leveldown(path.join(__dirname,'/db/current')));
const dockdb = levelup(leveldown(path.join(__dirname,'/db/dock')));

module.exports = {
    cdb,
    dockdb
};