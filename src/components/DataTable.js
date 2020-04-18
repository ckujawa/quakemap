import React from "react";
import styled from "styled-components";

const TableContainer = styled.div`
  width: 80%;
  margin: auto;
  padding: 10px;
  /* height: 200px; */
  overflow: scroll;
`;

const Table = styled.table`
  border-spacing: 0.2rem;
  border-collapse: collapse;
  table-layout: fixed;
  width: 90%;
  white-space: nowrap;
  margin: 10px auto;

  .mag {
    width: 10%;
  }

  .long,
  .lat {
    width: 15%;
  }

  .depth {
    width: 10%;
  }

  .name {
    width: 50%;
  }

  th {
    background-color: blue;
    color: white;
  }

  td {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  tr:nth-child(even) {
    background-color: lightblue;
  }

  th,
  td {
    border: 1px solid black;
    border-collapse: collapse;
    padding: 5px;
  }
`;
export const DataTable = (quakeData) => {
  let features = quakeData.quakeData;
  return (
    <TableContainer>
      <Table>
        <thead>
          <tr>
            <th className={"mag"}>Magnitude</th>
            <th className={"long"}>Longitude</th>
            <th className={"lat"}>Latitude</th>
            <th className={"depth"}>Depth</th>
            <th className={"name"}>Place Name</th>
          </tr>
        </thead>
        <tbody>
          {features
            .filter((data) => {
              return (
                data.type === "Feature" && data.properties.type === "earthquake"
              );
            })
            .map((data) => {
              return (
                <tr key={data.properties.code}>
                  <td>{data.properties.mag}</td>
                  <td>{data.geometry.coordinates[0]}</td>
                  <td>{data.geometry.coordinates[1]}</td>
                  <td>{data.geometry.coordinates[2]}</td>
                  <td>{data.properties.place}</td>
                </tr>
              );
            })}
        </tbody>
      </Table>
    </TableContainer>
  );
};

export default DataTable;
