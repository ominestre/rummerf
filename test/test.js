const assert = require('assert');
const fs = require('fs-extra');
const path = require('path');

before(function(done){
    this.timeout(30000);
    require('child_process').execSync('npm install', {cwd: path.resolve(__dirname, './data/sandbox/')});

    // securing protected file for testing
    // fs.chmodSync(path.resolve(__dirname, './data/protected.js'), 444);

    done();
});

beforeEach(() => {
    delete require.cache[require.resolve('../')];
});

describe('Deleting', function(){
    beforeEach(() => {
        fs.copySync(path.resolve(__dirname, './data/test-dummies/'), path.resolve(__dirname, './data/blast-zone/'));
    });

    it('Deletes a single file', function(){
        let rummerf = require('../');
        rummerf(path.resolve(__dirname, './data/blast-zone/single-file.js'));

        assert.ok(!fs.existsSync(
            path.resolve(__dirname, './data/blast-zone/single-file.js')
        ));
    });

    it('Deletes a single depth directory', function(){
        let rummerf = require('../');
        rummerf(path.resolve(__dirname, './data/blast-zone/dream/'));

        assert.ok(!fs.existsSync(
            path.resolve(__dirname, './data/blast-zone/dream/')
        ));
    });

    it('Deletes a multi depth directory', function(){
        let rummerf = require('../');
        rummerf(path.resolve(__dirname, './data/blast-zone/dream-within-dream/'));

        assert.ok(!fs.existsSync(
            path.resolve(__dirname, './data/blast-zone/dream-within-dream/')
        ));
    });

    it('Returns a promise that is resolved when the delete operation completes', function(done){
        let rummerf = require('../');
        rummerf(path.resolve(__dirname, './data/blast-zone/dream-within-dream/')).then(() => {
            assert(true);
            done();
        });
    });

    it('Throws an error when no path is specified', () => {
        assert.throws(() => {
            let rummerf = require('../');
            rummerf();
        }, /No target/);
    });

    it('Throws an error if the targets path is not absolute', () => {
        assert.throws(() => {
            let rummerf = require('../');
            rummerf('./foo/bar/baz');
        }, /absolute/);
    });

    const os = require('os').type();
    if(os === 'Linux' || os === 'Darwin'){
        xit('Throws an error when the file is protected', () => {
            const rummerf = require('../');

            assert.throws(() => {
                rummerf(path.resolve(__dirname, './data/protected.js'));
            }, /Access Error/);
        });
    }
});

describe('Project scoping limitations', function(){
    describe('With defined scoping', function(){
        it('Throws an error when the defined scope is not an absolute path', function(){
            assert.throws(() => {
                require('../').init('./foo/bar/baz/');
            }, /Scope must be an absolute path/);
        });

        it('Throws error if current working directory is root or protected', function(){
            assert.throws(() => {
                require('../').init('/');
            });
        });

        it('Throws an error when you attempt to delete a file outside of the defined scope', function(){
            assert.throws(() => {
                let rummerf = require('../').init(path.resolve(__dirname, './data/sandbox/'));
                rummerf(path.resolve(__dirname, './data/no-delete.js'));
            }, /Target is outside of defined scope/);
        });
    });

    describe('With default scoping using current working directory', function(){
        const start = process.cwd();

        const os = require('os').type();
        if(os === 'Linux' || os === 'Darwin'){
            it('Throws error if current working directory is root', function(){
                process.chdir('/');
                assert.throws(() => {
                    require('../');
                }, /Root is protected/);
            });
        }

        it('Throws an error when you attempt to delete a file outside of default scope', function(){
            assert.throws(() => {
                process.chdir(path.resolve(__dirname, './data/sandbox/'));
                require('../')(path.resolve(__dirname, './data/no-delete.js'));
            }, /Target is outside of defined scope/);
        });

        afterEach(() => {
            process.chdir(start);
        });
    });
});

after(() => {
    // removing protection for cleanup
    // fs.chmodSync(path.resolve(__dirname, './data/protected.js'), 777);
});
