const express = require('express');
const app = express();
const port = 8000;
app.get('/', (req, res) => {
 return res.send(`
            <html>
                <head><title>About us:</title></head>
                <body>
                    <h1>Welcome to About us page</h1>
                    <p>at CADT, We love express js!!</p>
                </body>
            </html>
        `);
}
)
app.get('/about', (req, res) => {
return res.send(`
            <html>
                <head><title>About us:</title></head>
                <body>
                    <h1>Welcome to About us page</h1>
                    <p>at CADT, we hate node.js!!</p>
                </body>
            </html>
        `);
}
)
app.get('/contact-us', (req, res) => {
return res.send(`
            <html>
                <head><title>Contact us Page!</title></head>
                <body>
                    <h1>Welcome to the contact Page</h1>
                    <p>You can reach us vai email...</p>
                </body>
            </html>
        `);
}
)
app.get('/projects', (req, res) => {
 return res.send(`
            <html>
                <head><title>Projects</title></head>
                <body>
                    <h1>Welcome to the Projects Page</h1>
                    <p>Here are our awesome projects</p>
                </body>
            </html>
        `);
}
)
app.use((req, res, next) =>{
res.send("404 not found!");
})


app.listen(3000, () => {
    console.log('Server is running at http://localhost:3000');
});