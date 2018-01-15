var fs = require('fs');

if(fs.existsSync('temp')) {
    console.log('Directory exists, removing...');
    if(fs.existsSync('temp/new.txt')) {
        fs.unlink('temp/new.txt');
    }
    fs.rmdirSync('temp');
}

fs.mkdirSync('temp');

if(fs.existsSync('temp')) {
    process.chdir('temp');
    fs.writeFileSync('test.txt', "This the text in the new file. Hello Amar !!! ");
    fs.renameSync('test.txt', 'new.txt');
    console.log('File has size ' + fs.statSync('new.txt').size + " bytes");
    console.log('File Contents ' + fs.readFileSync('new.txt').toString())

}