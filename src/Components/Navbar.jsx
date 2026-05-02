import { useContext } from "react";
import { PropertyContext } from "../context/PropertyContext";

function Navbar() {
  const { search, setSearch } = useContext(PropertyContext);

  return (
    <div className="navbar">
      <h2 className="logo">🏡 RealEstate Pro</h2>

      <div className="search-box">
        <span className="search-icon">🔍</span>
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search city or property..."
        />
      </div>
    </div>
  );
}

export default Navbar;