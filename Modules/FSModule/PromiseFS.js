
const fs = require('fs');
const path = require('path');

const fileName = 'z_promiseFS.txt';
const filePath = path.join(__dirname, fileName);

/*____________________________________________________________________________________*/

//.then() ensures clear chaining of multiple asynchronous operations.
//.cach() centralizes error handling, making it easy to debug and manage failures.

fs.promises.readdir(__dirname)
    .then((files) => {
        console.log('Files:', files);
    })
    .catch((err) => {
        console.error("Error:", err);
    });

/*____________________________________________________________________________________*/

fs.promises.readdir(__dirname)
    .then((files) => {
        console.log('Files:', files);
    })
    .catch((err) => {
        console.error("Error:", err);
    });

/*____________________________________________________________________________________*/
/*
Create (Write a file) : fs.promises.writeFile(filepath, data, options);
creates or overwrites a file with the specified data.
the writeFile() method returns a promise that resolves when the file is successfully written.
It writes data to a file asynchronously.
If the file does not exist, it will be created.
If the file already exists, it will be overwritten.

Syntax : fs.promises.writeFile(filepath, data, options);
filepath: A path to a file. If a URL is provided, it must use the `file:` protocol.
data: The data to write to the file.
options: An optional object with encoding, mode, and flag properties.
options = { encoding: 'utf8', mode: 0o666, flag: 'w' };
*/

fs.promises.writeFile(
    filePath, 'This is a sample text file.', 'utf8')
    .then(() => {
        console.log('File written successfully');
    })
    .catch((err) => {
        console.error(err);
    });


/*____________________________________________________________________________________*/
/*
Read (Read a file) :
fs.promises.readFile(filepath, options);
filepath: A path to a file. If a URL is provided, it must use the `file:` protocol.
options: An optional object with encoding, flag, and mode properties.
options = { encoding: 'utf8', flag: 'r', mode: 0o666 };

Syntax : 
fs.promises.readFile(filepath, options).then((data) => {
    // Do something with the data
}).catch((err) => {
    // Handle the error
});
*/

fs.promises.readFile(filePath, 'utf8')
    .then((data) => {
        console.log(data);
    })
    .catch((err) => {
        console.error(err);
    });

/*____________________________________________________________________________________*/

/*
Append (Append to a file) : Adds content to the end of a file.
fs.promises.appendFile(filepath, data, options);
filepath: A path to a file. If a URL is provided, it must use the `file:` protocol.
data: The data to append to the file.
options: An optional object with encoding, mode, and flag properties.
options = { encoding: 'utf8', mode: 0o666, flag: 'a' };

Syntax : 
fs.promises.appendFile(filepath, data, options).then(() => {
    // File appended successfully
}).catch((err) => {
    // Handle the error
});
*/


fs.promises.appendFile(filePath, '\nThis is a new line.', 'utf8')
    .then(() => {
        console.log('File appended successfully');
    })
    .catch((err) => {
        console.error(err);
    });

/*____________________________________________________________________________________*/

/*
Delete (Delete a file) : Deletes a file.
fs.promises.unlink(filepath);
filepath: A path to a file. If a URL is provided, it must use the `file:` protocol.

Syntax : 
fs.promises.unlink(filepath).then(() => {
    // File deleted successfully
}).catch((err) => {
    // Handle the error
});
*/


fs.promises.unlink(filePath)
    .then(() => {
        console.log('File deleted successfully');
    })
    .catch((err) => {
        console.error(err);
    });


/*____________________________________________________________________________________*/

/*
Rename (Rename a file) : Renames a file.
fs.promises.rename(oldPath, newPath);
oldPath: A path to a file. If a URL is provided, it must use the `file:` protocol.
newPath: A path to a file. If a URL is provided, it must use the `file:` protocol.

Syntax :
fs.promises.rename(oldPath, newPath).then(() => {
    // File renamed successfully
}).catch((err) => {
    // Handle the error
});
*/

fs.promises.rename(filePath, path.join(__dirname, 'z_newPromiseFS.txt'))
    .then(() => {
        console.log('File renamed successfully');
    })
    .catch((err) => {
        console.error(err);
    });

