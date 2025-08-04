// Lab5/QueryParameters.js
export default function QueryParameters(app) {
  // GET /lab5/calculator?operation=add&a=5&b=2
  app.get('/lab5/calculator', (req, res) => {
    const { a, b, operation } = req.query;
    const x = parseInt(a);
    const y = parseInt(b);
    let result;

    switch (operation) {
      case 'add':
        result = x + y;
        break;
      case 'subtract':
        result = x - y;
        break;
      case 'multiply':
        result = x * y;
        break;
      case 'divide':
        result = x / y;
        break;
      default:
        return res.send('Invalid operation');
    }

    res.send(result.toString());
  });
}
