const fs = require("fs");
const express = require("express");
const app = express();
const port = 8000;
app.get("/", (req, res) => {
  res.send("Welcome to the Home Page");
});
app.get("/contact", (req, res) => {
  console.log("Contact Page!");
  res.send(`
           <form method="POST" action="/contact">
             <input type="text" name="username" placeholder="Your name" />
             <button type="submit">Submit</button>
           </form>
         `);
});
app.post("/contact", (req, res) => {
  const { username } = req.body;

  fs.appendFile("./submissions.txt", username + "\n", (err) => {
    if (err) return res.status(500).send("Errror saving");
    res.send(`username: ${username}`);
  });
  // http://localhost:8000/contact?id=isean&desc=an%20amazing%20person
});

app.listen(port, () => {
  console.log(`Server is running at ${port}`);
});
