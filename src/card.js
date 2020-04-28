import React from "react";

import { list } from "./getList";

export default function Card(props) {
  return (
    <div>
      CARDS
      {list.map((item, idx) => (
        <div key={"card" + idx}>
          {[
            <h3 key={"unit" + idx}>{item.name}</h3>,
            " ",
            item.type,
            " ",
            Object.keys(item.statLine).map((stat, idx) => (
              <div key={"stat" + idx}>{[stat, ": ", item.statLine[stat]]}</div>
            ))
          ]}
        </div>
      ))}
    </div>
  );
}
