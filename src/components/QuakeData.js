import React, { useState, useEffect } from "react";

import DataTable from "./DataTable";

const QuakeData = () => {
  const [hasError, setErrors] = useState(false);
  const [quakes, setQuakes] = useState({});
  const [loading, setLoading] = useState(true);
  const endTime = new Date(Date.now());
  const startTime = new Date();
  startTime.setDate(endTime.getDate() - 1);

  useEffect(() => {
    async function getData() {
      let uri = `https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=${formatDate(
        startTime
      )}&endtime=${formatDate(endTime)}`;
      let res = await fetch(uri);
      res
        .json()
        .then((res) => {
          setQuakes(res);
          setLoading(false);
        })
        .catch(() => {
          setErrors(true);
          setLoading(false);
        });
    }
    getData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  } else {
    return (
      <div>
        <DataTable quakeData={quakes.features} />
        <hr />
        <span>Has error: {JSON.stringify(hasError)}</span>
      </div>
    );
  }
};

const formatDate = (date) => {
  let mm = date.getMonth() + 1;
  let dd = date.getDate();

  return `${date.getFullYear()}-${mm}-${dd}`;
};

export default QuakeData;
