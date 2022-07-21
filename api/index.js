const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");

const path = require("path")

// for creating rest api
const userRoute = require("./routes/users");
const authRoute = require("./routes/auth");
const postRoute = require("./routes/posts");


// storage
const multer = require("multer")


// env
dotenv.config();
// mongo connection
mongoose.connect(
  process.env.MONGO_URL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => {
    console.log("Connected to MongoDB");
  }
);

// if the params is /images, do not make a GET request but just go to the public/images directory
app.use("/images", express.static(path.join(__dirname, "public/images")));



// middlewares

// Without `express.json()`, `req.body` is undefined.
app.use(express.json());
//increase the HTTP header security
app.use(helmet());
// log HTTP requests and errors
app.use(morgan("common"));

const storage = multer.diskStorage({
  destination:(req, file, cb)=>{
    cb(null, "public/images");
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  }
})
const upload = multer({storage});
app.post("/api/upload", upload.single("file"), (req, res)=>{
  try {
    return res.status(200).json("file uploaded successfully");
  } catch (err) {
    console.log(err);
  }
})

app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/posts", postRoute);

app.listen(8800, ()=>{
  console.log("Backend server is running")
})
