const chokidar = require('chokidar');
const FileEntity = require('./FileEntity');

module.exports = (ignoreList) => {
    chokidar.watch(process.cwd(), { 
        ignored:(path, stats) => {
            let file = new FileEntity(path);
            if(stats){
                if(stats.isDirectory()){
                   return (ignoreList.indexOf(file.name) > -1);
                }else{
                   return (ignoreList.indexOf(file.name) > -1);
                }
            } 
            
            return false;
        }
    })
};