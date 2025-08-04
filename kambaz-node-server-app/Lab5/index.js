// Lab5/index.js
export default function Lab5(app) {
  // create route to welcome users to Lab 5
  app.get('/lab5/welcome', (req, res) => {
    res.send('Welcome to Lab 5');
  });
}
