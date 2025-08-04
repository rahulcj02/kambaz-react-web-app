// Hello.js
export default function Hello(app) {
  // moved from index.js
  app.get('/hello', (req, res) => {
    res.send('Life is good!');
  });
  app.get('/', (req, res) => {
    res.send('Welcome to Full Stack Development!');
  });
}
