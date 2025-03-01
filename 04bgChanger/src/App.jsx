import { useState } from "react";
function App() {
  const [color, setColor] = useState("red");

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button
          onClick={() => setColor("red")}
            className="outline-none px-4 py-1 rounded-2xl text-white shadow-lg"
            style={{ backgroundColor: "red" }}
          >
            Red
          </button>
          <button
          onClick={() => setColor("green")}
            className="outline-none px-4 py-1 rounded-2xl text-white shadow-lg"
            style={{ backgroundColor: "green" }}
          >
            Green
          </button>
          <button
          onClick={() => setColor("blue")}
            className="outline-none px-4 py-1 rounded-2xl text-white shadow-lg"
            style={{ backgroundColor: "blue" }}
          >
            Blue
          </button>
          <button
          onClick={() => setColor("gray")}
            className="outline-none px-4 py-1 rounded-2xl text-white shadow-lg"
            style={{ backgroundColor: "Gray" }}
          >
            Gray
          </button>
          <button
          onClick={() => setColor("yellow")}
            className="outline-none px-4 py-1 rounded-2xl text-black shadow-lg"
            style={{ backgroundColor: "Yellow" }}
          >
          Yellow
          </button>
          <button
          onClick={() => setColor("purple")}
            className="outline-none px-4 py-1 rounded-2xl text-white shadow-lg"
            style={{ backgroundColor: "Purple" }}
          >
          Purple
          </button>
          <button
          onClick={() => setColor("Lavender")}
            className="outline-none px-4 py-1 rounded-2xl text-blacl shadow-lg"
            style={{ backgroundColor: " Lavender" }}
          >
           Lavender
          </button>
          <button
          onClick={() => setColor("white")}
            className="outline-none px-4 py-1 rounded-2xl text-black shadow-lg"
            style={{ backgroundColor: "White" }}
          >
           White
          </button>
          <button
          onClick={() => setColor("black")}
            className="outline-none px-4 py-1 rounded-2xl text-white shadow-lg"
            style={{ backgroundColor: " Black" }}
          >
            Black
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
