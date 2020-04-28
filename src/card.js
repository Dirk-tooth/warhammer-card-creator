import React from "react";

// import cat from "xml-loader!./test_data/Aeldari - Harlequins.cat";
import ros from "./test_data/Z - HQ 2000.ros";
// import ros from "./test_data/CW + DK Mech Artillery ✅.ros";

function listSelections() {
  // console.log(cat.catalogue.publications[0].publication[0].$.name);
  // console.log(ros.roster.forces[0].force[0].selections[0].selection);
  const list = ros.roster.forces[0].force.reduce((forceAcc, force) => {
    return forceAcc.concat(
      force.selections[0].selection.reduce((selectionAcc, selection) => {
        // console.log(
        //   selection.$.type,
        //   selection.$.type === "unit" ? selection : "not a unit",
        //   selection.$.type === "unit"
        //     ? selection.profiles[0].profile
        //     : "not a unit"
        // );
        return selection.$.type === "unit"
          ? [
              ...selectionAcc,
              {
                name: selection.$.name,
                type: selection.$.type,
                statLine: selection.profiles[0].profile
                  ? selection.profiles[0].profile[0].characteristics[0].characteristic.reduce(
                      (statAcc, char) =>
                        Object.assign(statAcc, { [char.$.name]: char._ }),
                      {}
                    )
                  : { nope: "nada" }
              }
            ]
          : selectionAcc;
      }, [])
    );
  }, []);
  const uniqueList = list.reduce((listAcc, listItem) => {
    return listAcc.reduce((testAcc, accItem) => {
      return listItem.name === accItem.name || testAcc;
    }, false)
      ? listAcc
      : [...listAcc, listItem];
  }, []);
  return uniqueList;
}

export default function Card(props) {
  const list = listSelections();
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
