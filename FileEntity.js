const p = require('path');

class FileEntity {

    constructor(path){
        this.path = path;
        this.name = p.basename(path);
        this.dirname = p.dirname(path);
        this.relDir = p.relative(process.cwd(),this.dirname);
        this.ext = p.extname(path);
        this.relPath = p.relative(process.cwd(),this.path);
        
    }

}

module.exports = FileEntity;