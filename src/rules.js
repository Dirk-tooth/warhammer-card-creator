import React from "react";

import StatLine from "./statLine";

export default function Rules(props) {
  const { stats } = props;
  return (
    <div
      style={{
        height: "1.35in",
        width: "100%",
      }}
    >
      <StatLine stats={stats} />
    </div>
  );
}
