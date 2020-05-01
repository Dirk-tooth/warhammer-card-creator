// import cat from "xml-loader!./test_data/Aeldari - Harlequins.cat";
import ros from "../test_data/Z - HQ 2000.ros";
// import ros from "./test_data/CW + DK Mech Artillery ✅.ros";

function listSelections() {
  const list = ros.roster.forces[0].force.reduce((forceAcc, force) => {
    return forceAcc.concat(
      force.selections[0].selection.reduce((selectionAcc, selection) => {
        // console.log(selection.$.name, selection);
        return selection.$.type === "unit" // check if each selection is a unit or upgrade
          ? [
              ...selectionAcc, // if it is a unit, pass back the current array with the the new unit added
              {
                name: selection.$.name, // name of the unit
                type: selection.$.type, // type (unit for now, should change this to keywords later)
                statLine: selection.profiles[0].profile // putting together their statline
                  ? selection.profiles[0].profile[0].characteristics[0].characteristic.reduce(
                      (statAcc, char) =>
                        Object.assign(statAcc, { [char.$.name]: char._ }), // turning their statline into an object with stat: value
                      {}
                    )
                  : { nope: "nada" }, // return something so I know if the stats weren't where they are expected
                weapons: selection.selections[0].selection // putting together their weapon profiles
                  ? selection.selections[0].selection.map((weapon) =>
                      weapon.profiles[0].profile
                        ? weapon.profiles[0].profile[0].characteristics[0].characteristic.reduce(
                            (profileAcc, char) =>
                              Object.assign(profileAcc, {
                                [char.$.name]: char._,
                              }), // turning their weapon profiles into an object with char: value
                            {
                              // adding the weapon name to the origional object
                              name: weapon.profiles[0].profile[0].$.name,
                            }
                          )
                        : { weapon: "nada" }
                    )
                  : { nope: "nada" }, // return something so I know if the weapons weren't where they are expected
              }, // end of the unit object
            ]
          : selectionAcc; // if its not a unit, just return the current array
      }, [])
    );
  }, []);
  const uniqueList = list.reduce((listAcc, listItem) => {
    // uniquifying the list of units to prevent duplicate cards
    return listAcc.reduce((testAcc, accItem) => {
      return listItem.name === accItem.name || testAcc;
    }, false)
      ? listAcc
      : [...listAcc, listItem];
  }, []);
  console.log(uniqueList);
  return uniqueList;
}

export const list = listSelections(); // exports the unique list of units with their stats and other data
