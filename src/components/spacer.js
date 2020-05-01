import React from "react";

export default function Spacer(props) {
  const { height } = props;
  return (
    <div
      style={{
        height: height,
        width: "100%",
      }}
    />
  );
}
