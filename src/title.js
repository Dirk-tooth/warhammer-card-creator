import React from "react";

export default function Title(props) {
  const { title } = props;
  return (
    <div
      style={{
        alignItems: "flex-end",
        display: "flex",
        fontSize: ".185in",
        height: "0.26in",
        width: "100%",
      }}
    >
      {title}
    </div>
  );
}
