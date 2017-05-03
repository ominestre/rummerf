const fs = require('fs');

function init(scope){
   if(!scope)
        scope = process.cwd();
    
    if(!require('path').isAbsolute(scope))
        throw new Error('Scope must be an absolute path');

    isProtected(scope);

    return function(target){
        if(!target)
            throw new Error('No target provided to rummerf');
        
        if(!require('path').isAbsolute(target))
            throw new Error('Target must be an absolute path');
        
        if(!target.includes(scope))
            throw new Error('Target is outside of defined scope');

        isProtected(target);

        return new Promise((resolve, reject) => {
            try {
                if(fs.lstatSync(target).isDirectory()){
                    purge(target);
                    fs.rmdirSync(target);
                } else {
                    fs.unlinkSync(target);
                }
  
                resolve();
            } catch(e){
                reject(e);
            }
        });
    }
}

function isProtected(path){
    if(path === '/')
        throw new Error('Root is protected');
    
    fs.accessSync(path, fs.constants.R_OK | fs.constants.W_OK);
}

function purge(path){
    if(fs.existsSync(path)){
        for(let file of fs.readdirSync(path)){
            let next = `${path}/${file}`;
            if(fs.lstatSync(next).isDirectory()){
                purge(next);
                fs.rmdirSync(next);
            } else {
                fs.unlinkSync(next);
            }
        }
    }
}

module.exports = exports = (function(init){
    return init();
})(init);

exports.init = init;
