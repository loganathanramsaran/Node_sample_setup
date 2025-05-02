// Import Express
const express = require('express');
const app = express();

// Middleware to log each request
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

// Home Route
// app.get('/', (req, res) => {
//   res.send('Welcome to the Home Page!');
// });

// About Route
app.get('/about', (req, res) => {
  res.send('This is the About Page.');
});

//sample practice
app.get('/test', (req,res) => {
    res.send('This is the test page');
});

app.use((req, res, next) => {
    console.log('This runs for every request');
    next(); // move to the next middleware or route
  });


// Start Server
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});

app.get('/hello', (req, res) => {
    const name = req.query.name || 'Guest'; // get ?name=value from URL
    res.status(200).send(`Hello, ${name}!`);
  });

app.get('/change', (req, res) => {
    res.redirect('/test');
  });

  app.get('/profile', (req, res) => {
    const user = [{
      name: 'Logu',
      age: 25,
      email: 'logu@gmail.com'
    },{
        name:'Sam',
        age: 26,
        email:'sam@email.com'
    }];
    res.json(user); // Sends JSON response with status 200 by default
  });

  app.set('view engine','ejs');
  app.set('views','./views');
  
  app.get('/',(req,res) => {
    const user = {
        name: 'Logu',
        age: 25,
        email: 'logu@gmail.com'
      };
    res.render('index',{user})  
  })

  // // 404 Handler
app.use((req, res) => {
  res.status(404).send('404 - Page Not Found');
});

