import { useState } from "react";

function App() {
  const [color, setColor] = useState("olive");

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    > <h1 className="fixed flex flex-wrap justify-center text-white top-52 inset-x-2 py-12 text-4xl">Your Background Color is :-  <button 
    className="outline-dotted px-6 py-1 rounded-full text-white font-semibold " >
    { color }
   </button>
   </h1>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-2 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-10 py-6 rounded-3xl"> 
          <button onClick={() => setColor("red")}
           className="outline-none px-8 py-3 rounded-full text-white shadow-xl font-semibold" style={{backgroundColor: "red"}}>
           Red
          </button>
          <button onClick={() => setColor("blue")} className="outline-none px-8 py-3 rounded-full text-white shadow-xl font-semibold" style={{backgroundColor: "blue"}}>
           Blue
          </button>
          <button onClick={() => setColor("pink")} className="outline-none px-8 py-3 rounded-full text-white shadow-xl font-semibold" style={{backgroundColor: "pink"}}>
           Pink
          </button>
          <button onClick={() => setColor("green")} className="outline-none px-8 py-3 rounded-full text-white shadow-xl font-semibold" style={{backgroundColor: "green"}}>
           Green
          </button>
          <button onClick={() => setColor("yellow")} className="outline-none px-8 py-3 rounded-full text-black shadow-xl font-semibold" style={{backgroundColor: "yellow"}}>
           Yellow
          </button>
          <button onClick={() => setColor("Black")} className="outline-none px-8 py-3 rounded-full text-white shadow-xl font-semibold" style={{backgroundColor: "Black"}}>
           Black
          </button>
          <button onClick={() => setColor("orange")} className="outline-none px-8 py-3 rounded-full text-white shadow-xl font-semibold" style={{backgroundColor: "orange"}}>
           Orange
          </button>
          <button onClick={() => setColor("grey")} className="outline-none px-8 py-3 rounded-full text-white shadow-xl font-semibold" style={{backgroundColor: "grey"}}>
           Gray
          </button>
          <button onClick={() => setColor("white")} className="outline-dashed px-8 py-3 rounded-full text-black shadow-xl font-semibold" style={{backgroundColor: "white"}}>
           White
          </button>
          <button onClick={() => setColor("purple")} className="outline-none px-8 py-3 rounded-full text-white shadow-xl font-semibold" style={{backgroundColor: "purple"}}>
           Purple
          </button>
          
          </div>
      </div>
    </div>
  );
}

export default App;
