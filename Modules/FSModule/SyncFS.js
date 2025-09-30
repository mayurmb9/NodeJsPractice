
const fs = require('fs');
const path = require('path');

const fileName = 'z_hello.txt';
const filePath = path.join(__dirname, fileName);

/*____________________________________________________________________________________*/


/**
 * Writes data to a file.
 * If the file does not exist,
 * it will be created.
 */
// fs.writeFileSync(filepath, data, options);
// filepath: A path to a file. If a URL is provided, it must use the `file:` protocol.
// data: The data to write to the file.
// options: An optional object with encoding, mode, and flag properties.
// options = { encoding: 'utf8', mode: 0o666, flag: 'w' };


const writeFile = fs.writeFileSync(
    filePath,
    'This is a sample text file.',
    'utf8');

console.log(writeFile);

/*____________________________________________________________________________________*/


/**
 * Reads the contents of a file.
 * Returns as a string or buffer containing the file data.
 */
//fs.readFileSync(filepath, options);
// filepath: A path to a file. If a URL is provided, it must use the `file:` protocol.
// options: An optional object with encoding, flag, and mode properties.
// options = { encoding: 'utf8', flag: 'r', mode: 0o666 };
// use .toString() to convert buffer to string

const readFile = fs.readFileSync(filePath, 'utf8');
console.log(readFile);

/*____________________________________________________________________________________*/

/**
 * Appends data to a file.
 * If the file does not exist,
 * it will be created.
 */
// fs.appendFileSync(filepath, data, options);
// filepath: A path to a file. If a URL is provided, it must use the `file:` protocol.
// data: The data to append to the file.
// options: An optional object with encoding, mode, and flag properties.
// options = { encoding: 'utf8', mode: 0o666, flag: 'a' };

const appendFile =
    fs.appendFileSync(
        filePath,
        '\nThis is a new line.');

console.log(appendFile);

/*____________________________________________________________________________________*/

/**
 * Deletes a file by its path.
 * Throws an error if the file does not exist.
 */
// fs.unlinkSync(filepath);
// filepath: A path to a file. If a URL is provided, it must use the `file:` protocol.

// const deleteFile = fs.unlinkSync(filePath);
// console.log(deleteFile);

/*____________________________________________________________________________________*/

/**
 * Renames a file.
 * Throws an error if the file does not exist.
 */
// fs.renameSync(filepath, newpath);
// filepath: A path to an existing file. If a URL is provided, it must use the `file:` protocol.
// newpath: A path to a new location for the file.
// fs.renameSync(filePath, path.join(__dirname, 'newFile.txt'));

const renameFile = fs.renameSync(filePath, path.join(__dirname, 'z_newFile.txt'));
console.log(renameFile);


