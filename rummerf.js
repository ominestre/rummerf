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
    }
}

function isProtected(path){
    if(path === '/')
        throw new Error('Root is protected');
    
    const fs = require('fs');
    fs.accessSync(path, 7);
}

module.exports = exports = (function(init){
    return init();
})(init);

exports.init = init;
