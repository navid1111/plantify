import multer from 'multer';
import path from 'path';

const storage = multer.diskStorage({
  destination: '../uploads/',
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}${path.extname(file.originalname)}`);
  },
});

const upload = multer({
  limits: { fileSize: 2 * 1024 * 1024 },
  storage,
  fileFilter: (req, file, cb) => {
    const fileTypes = /jpeg|jpg|png/;
    const extname = fileTypes.test(
      path.extname(file.originalname).toLocaleLowerCase(),
    );
    const mimetype = fileTypes.test(file.mimetype);

    if (extname && mimetype) {
      cb(null, true);
    } else {
      cb(new Error('Images only!'));
    }
  },
});
export default upload;
