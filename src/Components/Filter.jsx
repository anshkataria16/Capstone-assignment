import { useContext } from "react";
import { PropertyContext } from "../context/PropertyContext";

function Filter() {
  const { setLocation } = useContext(PropertyContext);

  return (
    <select className="filter" onChange={(e) => setLocation(e.target.value)}>
      <option value="">All Locations</option>
      <option>Delhi</option>
      <option>Gurgaon</option>
      <option>Noida</option>
    </select>
  );
}

export default Filter;