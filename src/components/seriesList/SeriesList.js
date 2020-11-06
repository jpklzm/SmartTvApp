import SerieCard from "./serieCard/SerieCard";
import "./SeriesList.css";
import React, { useState, useEffect } from "react";
import axios from "axios";

function SeriesList() {
  const [data, setData] = useState({ series: [] });
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      //I got blocked by CORS policy in Viaplay API.
      //To bypass it, I'm using an external proxy to be able to fetch the data.
      //In a production scenario, I would contact the API owner to allow
      //my domain or, in case of third party APIs, I would fetch the data
      //from a server and forward the data to my client.
      const result = await axios(
        "https://cors-anywhere.herokuapp.com/http://content.viaplay.se/pc-se/serier/samtliga"
      );

      setData(result.data);
      setLoading(false);
    };

    fetchData();
  }, []);
  return (
    <div className="SeriesList">
      {loading
        ? null
        : data._embedded["viaplay:blocks"][0]._embedded[
            "viaplay:products"
          ].map((item) => <SerieCard serie={item.content} />)}
    </div>
  );
}

export default SeriesList;
