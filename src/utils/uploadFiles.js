import multer from "multer";

var storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, "uploads");
  },
  filename: function (req, file, callback) {
    callback(null, file.originalname);
  },
});
export const upload = multer({ storage: storage });
