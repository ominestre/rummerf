# rummerf

[![Build Status](https://travis-ci.org/ominestre/rummerf.svg?branch=master)](https://travis-ci.org/ominestre/rummerf)

Rummerf is an "rm -rf" deletion tool with set scoping.  When you initialize rummerf it either uses a path you provide or your Current Working Directory to limit the scope of deletions.  For example if my CWD is /path/foo/bar and I attempt to delete a file within /path/foo it will throw an exception.

## Usage

**Using default CWD**
```JavaScript
    const rummerf = require('@ominestre/rummerf');

    rummerf('/path/to/delete/');
```

**Using a specified scope**
```JavaScript
    const rummerf = require('@ominestre/rummerf').init('/my/project/scope/');

    rummerf('/my/project/scope/delete.js');
```

Currently rummerf requires an absolute path so it's recommended you use [NodeJS path.resolve](https://nodejs.org/dist/latest-v6.x/docs/api/path.html#path_path_resolve_paths).
