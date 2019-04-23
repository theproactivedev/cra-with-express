const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, 'client/public')));

app.get("/testApi/user", (req, res) => {
  return res.json({"user":"Eirin Gonzales", "bio":"I'm a front end engineer."});
});

app.listen(3001, function() {
console.log("Working");
});