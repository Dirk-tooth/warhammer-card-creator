// import cat from "xml-loader!./test_data/Aeldari - Harlequins.cat";
import ros from "./test_data/Z - HQ 2000.ros";
// import ros from "./test_data/CW + DK Mech Artillery ✅.ros";

function listSelections() {
  // console.log(cat.catalogue.publications[0].publication[0].$.name);
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
                  : { nope: "nada" },
              },
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

export const list = listSelections();
