import SerieCard from "./serieCard/SerieCard";
import "./SeriesList.css";
import React, { useState, useEffect } from "react";
import axios from "axios";

function SeriesList() {
  const [data, setData] = useState({ series: [] });
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        "http://content.viaplay.se/pc-se/serier/samtliga"
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
