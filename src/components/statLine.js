import React from "react";

export default function StatLine(props) {
  const { stats } = props;
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        paddingTop: ".025in",
        width: "95%",
      }}
    >
      {Object.keys(stats).map((stat, idx) => (
        <div key={"stat" + idx}>
          <div
            style={{
              fontSize: "0.12in",
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            {stat === "Save" ? "Sv" : stat}
          </div>
          <div
            style={{
              fontSize: "0.15in",
              textAlign: "center",
            }}
          >
            {stats[stat]}
          </div>
        </div>
      ))}
    </div>
  );
}
