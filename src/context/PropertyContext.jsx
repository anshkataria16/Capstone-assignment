import { createContext, useState } from "react";
import { propertiesData } from "../data/properties";

export const PropertyContext = createContext();

export const PropertyProvider = ({ children }) => {
  const [properties] = useState(propertiesData);
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState(null);

  const filtered = properties.filter((p) =>
    p.title.toLowerCase().includes(search.toLowerCase()) ||
    p.location.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <PropertyContext.Provider value={{ filtered, search, setSearch, selected, setSelected }}>
      {children}
    </PropertyContext.Provider>
  );
};