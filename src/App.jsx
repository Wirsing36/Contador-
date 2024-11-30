import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const increment = () => {
    if (count < 25) setCount(count + 1);
  };

  const decrement = () => {
    if (count > -25) setCount(count - 1);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Contador Incremental y Decremental</h1>
      <h2>{count}</h2>
      <div>
        <button onClick={decrement} style={{ marginRight: "10px", padding: "10px 20px" }}>
          Decrementar
        </button>
        <button onClick={increment} style={{ padding: "10px 20px" }}>
          Incrementar
        </button>
      </div>
      <footer style={{ marginTop: "50px" }}>
        <p>Nombre: Brandon Enrique</p>
        <p>Apellido: Ordoñez Wirsing</p>
        <p>ID: 000148613</p>
      </footer>
    </div>
  );
}

export default App;
