const express = require("express");
const app = express();
const port = 8000;
// app.use(express.json());
function login(req, res, next) {
  const method = req.method;
  const url = req.url;
  console.log(`Method: ${method} + URL: ${url}`);
  next();
}
app.use(login);
app.get("/", (req, res, next) => {
  res.send(`<h1>This is the logger page!</h1>`);
});
app.post("/user", (req, res, next) => {
  const { method, url } = req;
  res.send(
    `<h1>End of the system thank you ${method} + for using ${url} !!</h1>`,
  );
});
// 1. request to the server so uses get
// 2. send respond or pass to the next middlware if no middlware then end the cycle
app.listen(port, () => console.log(`server is running at ${port}`));
