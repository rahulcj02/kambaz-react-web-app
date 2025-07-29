
// Declare a function to handle the event
const hello = () => {
  alert("Hello World!");
};

// Wrap in a closure so you can pass parameters
const lifeIs = (good: string) => {
  alert(`Life is ${good}`);
};

export default function ClickEvent() {
  return (
    <div id="wd-click-event">
      <h2>Click Event</h2>

      {/* configure the function call */}
      <button onClick={hello} id="wd-hello-world-click">
        Hello World!
      </button>

      {/* wrap in () if you need to pass parameters */}
      <button onClick={() => lifeIs("Good!")} id="wd-life-is-good-click">
        Life is Good!
      </button>

      {/* wrap in {} if you need more than one line of code */}
      <button
        onClick={() => {
          hello();
          lifeIs("Great!");
        }}
        id="wd-life-is-great-click"
      >
        Life is Great!
      </button>

      <hr />
    </div>
  );
}
