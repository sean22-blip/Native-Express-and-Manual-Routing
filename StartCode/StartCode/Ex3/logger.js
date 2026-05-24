// logger.js
function login(req, res, next) {
  const method = req.method;
  const url = req.url;
  const timestamp = new Date().toISOString(); // Required by assignment criteria
  
  console.log(`[${timestamp}] Method: ${method} + URL: ${url}`);
  
  // Pass control to the next middleware or route handler
  next();
}

// This line tells server.js exactly what to import
module.exports = login;