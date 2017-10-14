const { spawn } = require('child_process');
const { cdb, dockdb } = require('./db');

const startServer = (name, port) => {
    const serverProcess = spawn('node', ['server.js', port], {
        detached: true,
        stdio: 'ignore'
      });
    const sid = serverProcess.pid.toString();
    serverProcess.unref();

    //Store process object using name
    return  cdb.put(name, sid)   
};

const stopServer = name => {
   return  cdb.get(name)
            .then(serverPid => serverPid.toString())
            .then(serverPid => {
                process.kill(serverPid);
                return cdb.del(name);
            });
};

const getServers = () => {
    return cdb.createReadStream()
}
module.exports = {
    getServers,
    startServer,
    stopServer
}