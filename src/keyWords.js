import React from "react";

export default function KeyWords(props) {
  const { keyWords } = props;
  return (
    <div
      style={{
        alignItems: "center",
        display: "flex",
        fontSize: ".1625in",
        height: "0.225in",
        width: "100%",
      }}
    >
      {keyWords}
    </div>
  );
}
