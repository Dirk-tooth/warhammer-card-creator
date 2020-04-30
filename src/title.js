import React from "react";

export default function Title(props) {
  const { title } = props;
  return (
    <div
      style={{
        width: "100%",
        height: "0.26in",
      }}
    >
      {title}
    </div>
  );
}
