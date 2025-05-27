// const fs = require("fs");
// const path = require("path");
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const multer = require("multer");
const path = require("path");
const { PORT } = require("./config/env");

const productRoutes = require("./routes/productRoutes");
const countryRoutes = require("./routes/countryRoutes");
const userRoutes = require("./routes/userRoutes");
const error = require("./middleware/error");
const errorHandler = require("./middleware/errorHandler");

const server = express();
server.use(express.json());
server.use(cors());
server.use(morgan("dev"));

server.use("/api/products", productRoutes);
server.use("/api/countries", countryRoutes);
server.use("/api/users", userRoutes);

server.get("/name", () => {
  throw new UnauthorizedError("Unauthorized", "You cannot use that");
});

server.all("*", error);
server.use(errorHandler);

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/"); // Save files to the 'uploads' directory
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`); // Rename file to avoid duplicates
  },
});

// Initialize upload middleware
const upload = multer({ storage });

// Ensure uploads folder exists
const fs = require("fs");
const { UnauthorizedError } = require("./util/client-error");
const uploadDir = "uploads";
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

// Upload route (single file)
server.post("/upload", upload.single("file"), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: "No file uploaded" });
  }
  res.json({ message: "File uploaded successfully", file: req.file });
});

// Upload route (multiple files)
server.post("/uploads", upload.array("files", 5), (req, res) => {
  if (!req.files || req.files.length === 0) {
    return res.status(400).json({ message: "No files uploaded" });
  }
  res.json({ message: "Files uploaded successfully", files: req.files });
});

server.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
