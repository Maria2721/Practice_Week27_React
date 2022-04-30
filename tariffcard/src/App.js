import "./App.css";

import Tariff from "./components/Tariff";

const tariffs = [
  { price: "300", volume: "10", color: "cyan" },
  { price: "450", volume: "50", color: "turquoise" },
  { price: "550", volume: "100", color: "coral", isSelected: true },
  { price: "1000", volume: "200", color: "darkblue" },
];

function App() {
  return (
    <div className="App">
      {tariffs.map((el) => (
        <Tariff
          price={el.price}
          volume={el.volume}
          color={el.color}
          isSelected={el.isSelected}
        />
      ))}
    </div>
  );
}

export default App;
