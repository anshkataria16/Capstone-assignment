import "./App.css";
import { useContext } from "react";
import { PropertyProvider, PropertyContext } from "./context/PropertyContext";

import Navbar from "./Components/Navbar";
import PropertyCard from "./Components/PropertyCard";
import Details from "./Components/Details";

function Main() {
  const { filtered, selected } = useContext(PropertyContext);

  return (
    <div className="container">

      {selected ? (
        <Details />
      ) : filtered.length === 0 ? (
        <h2 style={{ textAlign: "center", marginTop: "40px" }}>
          ❌ No Property Found
        </h2>
      ) : (
        <div className="grid">
          {filtered.map((p) => (
            <PropertyCard key={p.id} item={p} />
          ))}
        </div>
      )}
    </div>
  );
}

function App() {
  return (
    <PropertyProvider>
      <Navbar />
      <Main />
    </PropertyProvider>
  );
}

export default App;
