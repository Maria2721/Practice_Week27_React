import "./App.css";

import Tariff from "./components/Tariff";

const tariffs = [
  { id: "1", price: "300", volume: "10", color: "cyan" },
  { id: "2", price: "450", volume: "50", color: "turquoise" },
  { id: "3", price: "550", volume: "100", color: "coral" },
  { id: "4", price: "1000", volume: "200", color: "darkblue" },
];

function App() {
  return (
    <div className="App">
      {tariffs.map((el) => (
        <Tariff
          key={el.id}
          price={el.price}
          volume={el.volume}
          color={el.color}
        />
      ))}
    </div>
  );
}

export default App;
