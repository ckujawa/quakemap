import React from "react";

export const DataTable = (quakeData) => {
  let features = quakeData.quakeData;
  return (
    <div>
      {features.map((data) => {
        return <div>{data.properties.title}</div>;
      })}
    </div>
  );
};

export default DataTable;
