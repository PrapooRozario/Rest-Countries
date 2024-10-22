import { useEffect } from "react";
import { useState } from "react";
import Country from "./Country";
const Countries = () => {
  const [country, setCountry] = useState([]);
  const [mark, setMark] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountry(data));
  }, []);
  const handleMark = (name) => {
    const newArr = [...mark, name];
    setMark(newArr);
  };
  return (
    <div>
      <h1>Total Country : {country.length}</h1>
      <h3>Total Mark : {mark.length}</h3>
      <ul>
        {
        mark.map((country) => (
          <li key={country}>{country}</li>
        ))
        }
      </ul>
      <div className="Country">
        {country.map((country) => (
          <Country Country={country} handleMark={handleMark} key={country}></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
