const assert = require('assert');
const fs = require('fs');
const path = require('path');

before(function(done){
    this.timeout(30000);
    process.stdout.write('Preping test sandbox for scoping tests...\n');
    require('child_process').execSync('npm install', {cwd: path.resolve(__dirname, './data/sandbox/')});
    process.stdout.write('Test environment ready\n\n\n');

    // securing protected file for testing
    fs.chmodSync(path.resolve(__dirname, './data/protected.js'), 444);

    done();
});

describe('Deleting', function(){
    xit('Deletes a single file', function(){
    
    });

    xit('Deletes a single depth directory', function(){

    });

    xit('Deletes a multi depth directory', function(){

    });

    xit('Returns a promise that is resolved when the delete operation completes', function(){

    });

    it('Throws an error when no path is specified', () => {
        assert.throws(() => {
            let rummerf = require('../');
            rummerf();
        }, /No target/);
    });
});

describe('Project scoping limitations', function(){
    const cwd = process.cwd();

    before(() => {
        // changes current working directory into the sandbox directory
        process.chdir(path.resolve(__dirname, './data/sandbox/'));
    });

    describe('With defined scoping', function(){
        xit('Throws an error when the defined scope is not an absolute path', function(){

        });

        xit('Throws error if current working directory is root or protected', function(){

        });

        xit('Throws an error when you attempt to delete a file outside of the defined scope', function(){

        });
    });

    describe('With default scoping using current working directory', function(){
        const rummerf = require('../');

        it('Throws error if current working directory is root or protected', function(){
            assert.throws(() => {
                rummerf('/');
            }, /Root is protected/)
        });

        it('Throws an error when you attempt to delete a file outside of default scope', function(){
            assert.throws(() => {
                rummerf(path.resolve(__dirname, './data/no-delete.js'));
            }, /Access Error/);
        });
    });

    after(() => {
        // restores current working directory to test process
        process.chdir(cwd);
    });
});

after(() => {
    // removing protection for cleanup
    fs.chmodSync(path.resolve(__dirname, './data/protected.js'), 777);
});
