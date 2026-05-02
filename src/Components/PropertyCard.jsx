import { useContext } from "react";
import { PropertyContext } from "../context/PropertyContext";

function PropertyCard({ item }) {
  const { setSelected } = useContext(PropertyContext);

  return (
    <div className="card">
      <img src={item.image} alt={item.title} />

      <div className="card-content">
        <h3>{item.title}</h3>
        <p>{item.location}</p>
        <p className="price">{item.price}</p>

        <button className="btn" onClick={() => setSelected(item)}>
          View Details
        </button>
      </div>
    </div>
  );
}

export default PropertyCard;