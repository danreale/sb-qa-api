const express = require("express");
const users = require("./users.json");
app = express();

let port = process.env.PORT || 3000;

app.get("/api/health", (req, res) => res.send({ message: "API Is Running" }));

app.get("/api/employees", (req, res) => {
  if (req.query.lastName == undefined && req.query.job == undefined) {
    res.send(users);
  } else {
    if (req.query.lastName == undefined) {
      const user = users.filter((x) => x.job == req.query.job);
      res.send(user);
    } else if (req.query.job == undefined) {
      const user = users.filter((x) => x.lastName == req.query.lastName);
      res.send(user);
    } else {
      const user = users.filter((x) => x.lastName == req.query.lastName);
      const user2 = user.filter((x) => x.job == req.query.job);
      res.send(user2);
    }
  }
});
app.get("/api/employees/:id", (req, res) => {
  const user = users.filter((x) => x.id == req.params.id);
  res.send(user[0]);
});

app.listen(port, function () {
  console.log("Running API on Port " + port);
});

module.exports = app; // for testing
