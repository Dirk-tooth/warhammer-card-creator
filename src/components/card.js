import React from "react";

import { list } from "../utils/getList";

import blankCard from "../assets/blank-card.png";
import Title from "./title";
import Spacer from "./spacer";
import Image from "./image";
import KeyWords from "./keyWords";
import Rules from "./rules";

export default function Card(props) {
  return (
    <div>
      CARDS
      {list.map((item, idx) => (
        <div
          key={"card" + idx}
          style={{
            backgroundImage: `url(${blankCard})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "contain",
            height: "5in",
            width: "3.5in",
          }}
        >
          <div
            key={"card-container" + idx}
            style={{
              alignItems: "center",
              display: "flex",
              flexDirection: "column",
              height: "4.125in",
              justifyContent: "flex-start",
              padding: "0.25in 0.3in 0.5in 0.3in",
              position: "relative",
            }}
          >
            {[
              <Title key={"title" + idx} title={item.name} />,
              <Spacer height="0.075in" key={"title-spacer" + idx} />,
              <Image key={"image" + idx} url="" />,
              <Spacer height="0.055in" key={"image-spacer" + idx} />,
              <KeyWords key={"keyWords" + idx} keyWords={[item.type]} />,
              <Spacer height="0.055in" key={"KeyWords-spacer" + idx} />,
              <Rules key={"Rules" + idx} stats={item.statLine} />,
            ]}
          </div>
        </div>
      ))}
    </div>
  );
}
