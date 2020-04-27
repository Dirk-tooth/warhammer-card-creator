import React from "react";

// import cat from "xml-loader!./test_data/Aeldari - Harlequins.cat";
import ros from "xml-loader!./test_data/Z - HQ 2000.ros";
// import ros from "xml-loader!./test_data/AC 2000 all armor.ros";

function listSelections() {
  // console.log(cat.catalogue.publications[0].publication[0].$.name);
  // console.log(ros.roster.forces[0].force[0].selections[0].selection);
  const list = ros.roster.forces[0].force.reduce((acc, force) => {
    return acc.concat(
      force.selections[0].selection.map(selection => {
        if (selection.$.type === "unit") {
          return selection.$.name;
        }
      })
    );
  }, []);
  const uniqueList = list.reduce((acc, item) => {
    acc.includes(item) ? acc : [...acc, item];
  }, []);
  return uniqueList;
  s;
}

export default function Card(props) {
  const list = listSelections();
  return (
    <div>
      CARDS
      {list.map(item => (
        <div>{item}</div>
      ))}
    </div>
  );
}
