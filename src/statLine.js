import React from "react";

export default function StatLine(props) {
  const { stats } = props;
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
      }}
    >
      {Object.keys(stats).map((stat, idx) => (
        <div key={"stat" + idx}>
          <div>{stat}</div>
          <div>{stats[stat]}</div>
        </div>
      ))}
    </div>
  );
}
