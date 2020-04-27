import React from "react";

// import cat from "xml-loader!./test_data/Aeldari - Harlequins.cat";
import ros from "./test_data/Z - HQ 2000.ros";
// import ros from "xml-loader!./test_data/AC 2000 all armor.ros";

function listSelections() {
  // console.log(cat.catalogue.publications[0].publication[0].$.name);
  // console.log(ros.roster.forces[0].force[0].selections[0].selection);
  const list = ros.roster.forces[0].force.reduce((forceAcc, force) => {
    return forceAcc.concat(
      force.selections[0].selection.reduce((selectionAcc, selection) => {
        return selection.$.type === "unit"
          ? [...selectionAcc, selection.$.name]
          : selectionAcc;
      }, [])
    );
  }, []);
  const uniqueList = list.reduce((acc, item, idx) => {
    return acc.includes(item) ? acc : [...acc, item];
  }, []);
  return uniqueList;
  s;
}

export default function Card(props) {
  const list = listSelections();
  return (
    <div>
      CARDS
      {list.map((item, idx) => (
        <div key={idx}>{item}</div>
      ))}
    </div>
  );
}
