
const fs = require('fs');
const path = require('path');

const fileName = 'z_SampleAsync.txt';
const filePath = path.join(__dirname, fileName);

/*____________________________________________________________________________________*/

//Writes data to a file, replacing the file if it already exists.
//fs.writeFile(filepath, data, options, callback);
//filepath: A path to a file. If a URL is provided, it must use the `file:` protocol.
//data: The data to write to the file.
//options: An optional object with encoding, mode, and flag properties.
//options = { encoding: 'utf8', mode: 0o666, flag: 'w' };
//callback: An optional callback function. Used to indicate when writing is complete.
//callback(err);

fs.writeFile(
    filePath,
    'This is a sample text file.',
    'utf8',
    (err) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log('File written successfully');
    }
)


/*____________________________________________________________________________________*/

//Reads the contents of a file asynchronously and returns the data as a buffer or string.
//fs.readFile(filepath, options, callback);
//filepath: A path to a file. If a URL is provided, it must use the `file:` protocol.
//options: An optional object with encoding, flag, and mode properties.
//options = { encoding: 'utf8', flag: 'r', mode: 0o666 };
//callback: An optional callback function. Used to indicate when reading is complete.
//callback(err, data);

fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log(data);
});



/*____________________________________________________________________________________*/


//Appends data to a file, creating the file if it does not exist.
//fs.appendFile(filepath, data, options, callback);
//filepath: A path to a file. If a URL is provided, it must use the `file:` protocol.
//data: The data to append to the file.
//options: An optional object with encoding, mode, and flag properties.
//options = { encoding: 'utf8', mode: 0o666, flag: 'a' };
//callback: An optional callback function. Used to indicate when appending is complete.
//callback(err);

fs.appendFile(
    filePath,
    '\nThis is a new line.',
    (err) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log('File appended successfully');
    }
);


/*____________________________________________________________________________________*/


//Deletes a file by its path.
//fs.unlink(filepath, callback);
//filepath: A path to a file. If a URL is provided, it must use the `file:` protocol.
//callback: An optional callback function. Used to indicate when deletion is complete.
//callback(err);

fs.unlink(filePath, (err) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log('File deleted successfully');
});

/*____________________________________________________________________________________*/

//Renames a file.
//fs.rename(oldPath, newPath, callback);
//oldPath: A path to a file. If a URL is provided, it must use the `file:` protocol.
//newPath: A path to a file. If a URL is provided, it must use the `file:` protocol.
//callback: An optional callback function. Used to indicate when renaming is complete.
//callback(err);

fs.rename(filePath, path.join(__dirname, 'z_newAsyncFile.txt'), (err) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log('File renamed successfully');
});