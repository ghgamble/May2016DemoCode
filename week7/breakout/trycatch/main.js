var fs = require('fs')

try {
    var fakeFile = fs.readFileSync('thisIsNotARealFile.notARealFileExtension')
    console.log('did it work?')
} catch(error) {
    console.log("we couldn't read the file...")
} finally {
    console.log('this always runs')
}