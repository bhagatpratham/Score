import React, { useEffect } from "react";

const Matches = () => {
  const api_key = process.env.API_KEY;
  const BASE_URL = `https://api.football-data.org/v2/`;

  const fetchData = async () => {
    const response = await fetch(BASE_URL + "/competitions", {
      headers: { "X-Auth-Token": api_key },
    });
    const newData = await response.json();
    console.log(newData);
  };

  useEffect(() => {
    fetchData();
  });
  return (
    <div>
      <h1>Matches</h1>
    </div>
  );
};

export default Matches;
