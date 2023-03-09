import { useState } from "react";
import "./App.css";
import Form from "./components/Form";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>¡Bienvenido/a!😃</h1>
      <h2>Permítenos conocer un poco más sobre ti</h2>
      <Form />
    </div>
  );
}

export default App;
