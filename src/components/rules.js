import React from "react";

import StatLine from "./statLine";

export default function Rules(props) {
  const { stats } = props;
  return (
    <div
      style={{
        display: "flex",
        flexdirection: "column",
        height: "1.35in",
        justifyContent: "center",
        width: "100%",
      }}
    >
      <StatLine stats={stats} />
    </div>
  );
}
