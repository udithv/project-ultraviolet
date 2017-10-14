const watcher = require('./watcher');

const ignoreList = [
    'node_modules',
    'done.txt'
];

const log = console.log.bind(console);

watcher(ignoreList)
.on('add', path => log(`File ${path} has been added`))
.on('change', path => log(`File ${path} has been changed`))
.on('unlink', path => log(`File ${path} has been removed`))
.on('addDir', path => log(`Directory ${path} has been added`))
.on('unlinkDir', path => log(`Directory ${path} has been removed`))
.on('error', error => log(`Watcher error: ${error}`))
.on('ready', () => log('Initial scan complete. Ready for changes'))
.on('raw', (event, path, details) => {
  log('Raw event info:', event, path, details);
});
