import React from "react";

import { list } from "./getList";

import blankCard from "./assets/blank-card.png";
import Title from "./title";
import Spacer from "./spacer";
import Image from "./image";
import KeyWords from "./keyWords";
import StatLine from "./statLine";

export default function Card(props) {
  return (
    <div>
      CARDS
      {list.map((item, idx) => (
        <div
          key={"card" + idx}
          style={{
            backgroundImage: `url(${blankCard})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            width: "3.5in",
            height: "5in",
          }}
        >
          <div
            style={{
              height: "4.125in",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "center",
              padding: "0.25in 0.3in 0.5in 0.3in",
              position: "relative",
            }}
          >
            {[
              <Title title={item.name} />,
              <Spacer height="0.075in" />,
              <Image url="" />,
              <Spacer height="0.055in" />,
              <KeyWords keyWords={[item.type]} />,
              <Spacer height="0.055in" />,
              <StatLine stats={item.statLine} />,
            ]}
          </div>
        </div>
      ))}
    </div>
  );
}
