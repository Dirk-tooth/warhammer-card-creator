import React from "react";

import wh40k from "../assets/wh40k.png";

export default function Image(props) {
  const { url } = props;
  return (
    <div
      style={{
        backgroundImage: `url(${url ? url : wh40k})`,
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        height: "2.125in",
        width: "100%",
      }}
    />
  );
}
