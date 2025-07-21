export default function FunctionDestructuring() {
  const add = (a: number, b: number) => a + b;
  const sum = add(1, 2);
  const subtract = ({ a, b }: { a: number; b: number }) => a - b;
  const difference = subtract({ a: 4, b: 2 });

  return (
    <div id="wd-function-destructuring">
      <h2>Function Destructuring</h2>
      const add = (a, b) ={">"} a + b <br />
      const sum = add(1, 2) <br />
      const subtract = ({'{'} a, b {'}'}) ={">"} a - b <br />
      const difference = subtract({'{'} a: 4, b: 2 {'}'}) <br />
      sum = {sum} <br />
      difference = {difference}
      <hr />
    </div>
  );
}
