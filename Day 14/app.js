// security

// https
// password Test@123 encrypted xyz@123 // backend decrypt Test@123 + salt validate to database // Database also have diff encyrption + salt
// We should not store the password anywhere 
// Keep dependenies updated ==> npm audit fix
// XSS (Corss-site-scripting) malicious 
// Input validation frontend and backend encode
// output encoding 
// EVAL or function construction new Function()
// secure cookies document.cookie = "myCookie=myValue; path=/; secure; HttpOnly";
// allow html sanitize html 

// Example with DOMPurify library
const sanitizedHTML = DOMPurify.sanitize(userInput);
element.innerHTML = sanitizedHTML;

// CSP 
<meta http-equiv="Content-Security-Policy" content="script-src 'self'"></meta>

// Javascript:alert('xss')

// <a href="javascript:alert('XSS')">Click me</a>

// <button onclick="myFunction()">Click me</button>

const myFunction = () => {
    alert('secure')
}

// CSRF  Cross-Site Request Forgery // Forgery token gnerrated on server and send to client POST request 


app.post('/submit', (req, res) => {
    // Verify the CSRF token before processing the form submission
    if (req.csrfToken() !== req.body._csrf) {
      return res.status(403).send('CSRF token mismatch');
    }
  
    // Process the form submission
    const data = req.body.data;
    // ... your processing logic ...
  
    res.send(`Form submitted with data: ${data}`);
  });


  // session timeout 

  // refresh token after centain time 
  

