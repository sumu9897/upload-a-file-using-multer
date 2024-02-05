const fs = require('fs');
const path = require('path');
const multer = require('multer');

function home(req, res) {
    res.send('This is Home Page');
}

function about(req, res) {
    res.send('This is About Page');
}

function contact(req, res) {
    res.send('This is Contact Page');
}

function writeFile(req, res) {
    const filePath = path.join(__dirname, 'demo.txt');
    const fileContent = 'hello world';

    fs.writeFile(filePath, fileContent, (err) => {
        if (err) {
            res.status(500).send('Error writing to file');
        } else {
            res.status(200).send('File demo.txt created and text written: hello world');
        }
    });
}

function uploadFile(req, res) {
    const upload = multer({ dest: 'uploads/' });

    // Single file upload
    upload.single('file')(req, res, (err) => {
        if (err) {
            res.status(500).send('Error uploading file');
        } else {
            res.status(200).send('File uploaded successfully');
        }
    });
}

module.exports = {
    home,
    about,
    contact,
    writeFile,
    uploadFile,
};
