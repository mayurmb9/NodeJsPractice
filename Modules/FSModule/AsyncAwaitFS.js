
const fs = require('fs/promises');
const path = require('path');

const fileName = 'z_AsyncAwaitFS.txt';
const filePath = path.join(__dirname, fileName);

const readFolder = async () => {
    try {
        const files = await fs.readdir(__dirname);
        console.log('Files:', files);
    } catch (error) {
        console.error("Error:", error);
    }
}


readFolder();

/*____________________________________________________________________________________*/

const writeFileExample = async () => {
    try {
        await fs.writeFile(filePath, 'This is a sample text file.');
        console.log('File written successfully');
    } catch (error) {
        console.error(error);
    }
}

writeFileExample();

/*____________________________________________________________________________________*/

const appendFileExample = async () => {
    try {
        await fs.appendFile(filePath, '\nThis is a new line.');
        console.log('File appended successfully');
    } catch (error) {
        console.error(error);
    }
}

appendFileExample();

/*____________________________________________________________________________________*/

const deleteFileExample = async () => {
    try {
        await fs.unlink(filePath);
        console.log('File deleted successfully');
    } catch (error) {
        console.error(error);
    }
}

deleteFileExample();

/*____________________________________________________________________________________*/

const renameFileExample = async () => {
    try {
        await fs.rename(filePath, path.join(__dirname, 'z_newAsyncAwaitFile.txt'));
        console.log('File renamed successfully');
    } catch (error) {
        console.error(error);
    }
}

renameFileExample();

/*____________________________________________________________________________________*/

const readFileExample = async () => {
    try {
        const data = await fs.readFile(filePath, 'utf8');
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}

readFileExample();