import { useContext } from "react";
import { PropertyContext } from "../context/PropertyContext";

function Details() {
  const { selected, setSelected } = useContext(PropertyContext);

  return (
    <div className="details">
      <img src={selected.image} alt={selected.title} />

      <div className="details-content">
        <button className="btn" onClick={() => setSelected(null)}>
          Back
        </button>

        <h2>{selected.title}</h2>
        <p>{selected.location}</p>
        <p className="price">{selected.price}</p>
        <p>{selected.desc}</p>
      </div>
    </div>
  );
}

export default Details;