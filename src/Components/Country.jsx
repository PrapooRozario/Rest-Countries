import { useState } from "react";
import "./Country.css";

const Country = ({ Country, handleMark }) => {
  const { name, flags, cca3, capital, independent } = Country;
  const [visited, setVisited] = useState(false);
  const handleVisited = () => {
    setVisited(!visited);
  };
  return (
    <div className="country">
      <h1>{name?.common}</h1>
      <img src={flags?.png} alt="" />
      <p>{cca3}</p>
      <h1>
        {capital} Capital of {name?.common}
      </h1>
      <h3>
        {independent ? "Ohway Amra Shadin" : "Ami ke Tumi ke? Razkar Razakar"}
      </h3>
      <button className="btn" onClick={()=>handleMark(name?.common)}>Mark</button>
      <button className={visited ? "btnD" : "btn"} onClick={handleVisited}>
        {visited ? "Visited" : "Visit Now"}
      </button>
    </div>
  );
};

export default Country;
