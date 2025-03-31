const multer = require('multer');
const fs = require('fs');
const path = require('path');
const { promisify } = require('util');

// Ensure the upload directory exists
const uploadDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

// Configure Multer storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, uploadDir),
  filename: (req, file, cb) => cb(null, `${Date.now()}-${file.originalname}`)
});

const upload = multer({ storage }).single('file');

// Convert Multer to a Promise-based function
const uploadFile = (filePath) => {
  return new Promise((resolve, reject) => {
    // Read the file and create a simulated `file` object
    fs.readFile(filePath, (err, data) => {
      if (err) return reject(err);

      const file = {
        fieldname: 'file',
        originalname: path.basename(filePath),
        mimetype: 'image/jpeg', // Adjust according to the file type
        buffer: data,
      };

      // Call Multer with a fake request object
      const req = { file };
      req.headers['transfer-encoding'] = 'multipart/'

      upload(req, {}, (err) => {
        if (err) return reject(err);
        if (!req.file) return reject(new Error('No file uploaded'));
        resolve({ message: 'File uploaded successfully', file: req.file });
      });
    });
  });
};

// Example usage
const testFilePath = path.join(__dirname, 'pg.js'); // Change to an actual file path

uploadFile(testFilePath)
  .then(response => console.log(response))
  .catch(error => console.error('Upload error:', error.message));
