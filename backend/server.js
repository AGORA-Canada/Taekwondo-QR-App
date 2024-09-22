require("dotenv").config();
const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");
const path = require("path");
const MongoStore = require("connect-mongo");

//JWT and bcrypt
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
// const saltRounds = 12;

// secret information section
const JWT_SECRET = process.env.JWT_SECRET;
// const mongodb_user = process.env.MONGODB_USER;
// const mongodb_password = process.env.MONGODB_PASSWORD;
// const mongodb_session_secret = process.env.MONGODB_SESSION_SECRET;
// var mongoStore = MongoStore.create({
//   mongoUrl: `mongodb+srv://${mongodb_user}:${mongodb_password}@cluster0.ttibm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`,
//   crypto: {
//     secret: mongodb_session_secret,
//   },
// });

//Test data
const users = [
  {
    id: 1,
    userType: "customer",
    userId: "customer123",
    password: "password123",
  },
  {
    id: 2,
    userType: "store",
    userId: "store123",
    password: "password123",
  },
  {
    id: 3,
    userType: "business",
    userId: "business123",
    password: "password123",
  },
];

// middleware
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
  // session({
  //   secret: node_session_secret,
  //   store: mongoStore,
  //   saveUninitialized: false,
  //   resave: true,
  //   cookie: {
  //     secure: false, // Set to true if using HTTPS
  //     maxAge: 3600000, // 1 hour in milliseconds
  //   },
  //   autoRemove: "interval",
  //   autoRemoveInterval: 60, // Sessions older than 1 hour will be removed every minute
  //   encrypt: true, // Enable encryption for session data (this is usually the default)
  // })
);

// Login
app.post("/api/login", async (req, res) => {
  const { userId, password } = req.body;

  // find user from database
  const user = users.find((u) => u.userId === userId);

  if (!user) {
    return res.status(401).json({ message: "Invalid id or password." });
  }

  // Check password validity
  const isPasswordValid = user.password === password;
  // const isPasswordValid = await bcrypt.compare(password, user.password);

  if (!isPasswordValid) {
    return res.status(401).json({ message: "Invalid id or password." });
  }

  // Generate token
  const token = jwt.sign(
    { id: user.id, username: user.userId, userType: user.userType },
    JWT_SECRET,
    {
      expiresIn: "1h",
    }
  );

  // Send token
  res.json({ token });
});

// API route example
app.get("/api/data", (req, res) => {
  res.json({ message: "Hello from the backend!" });
});

app.use(express.static(path.join(__dirname, "../build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../build", "index.html"));
});

// Server execution
app.listen(port, () => {
  console.log(`Backend server running on http://localhost:${port}`);
});
