require('dotenv').config();

const express = require("express");
const mongoose = require("mongoose");
const session = require("express-session");
const passport = require("./passport");
const userController = require("./controllers/userController");
const expenseController = require("./controllers/expenseController");
const dummyData = require("./controllers/dummyDataController");
// const routes = require("./routes");

const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();

// Middleware =========================
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use(passport.initialize());


// Sessions ============================
app.use(session({
  secret: 'fraggle-rock',
  resave: false,
  saveUnitialized: false
}))

app.use((req, res, next) => {
  console.log("req.session", req.session);
  return next();
});

// app.post("/api/user", userController.create);
//   console.log("User Sign Up");
//   req.session.username = req.body.username;
//   res.end()

//EXPENSE PATHS ================
app.post("/api/expense", expenseController.create);
app.get("/api/expense", expenseController.read);
app.get("/api/expense/:mon", expenseController.findByMonth);

//USER PATHS ================
app.post("/api/user", userController.create);
app.post("/api/user/login", userController.login);
app.put("/api/user", userController.update);
app.get("/api/user", userController.get);

// dummyData.create();


// Static Assets (usually on heroku) =========
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// API Routes ================
// app.use("/api/", user);

// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/HAMR",
  {
    useCreateIndex: true,
    useNewUrlParser: true
  }
);


// Send every request to the React app & ===
// Define API routes before this runs ======

// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "./client/build/index.html"));
// });

app.get("*", (req, res) => {
  let url = path.join(__dirname, '../client/build', 'index.html');
  if (!url.startsWith('/app/')) // since we're on local windows
    url = url.substring(1);
  res.sendFile(url);
});

app.listen(PORT, () => {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
