import ros from "../test_data/Z - HQ 2000.ros";

function digDeeper(data) {
  // data = a force for now

  // should:
  // 1) if there is a typeName in the profile, add that to the top level object
  // 2) if there are more selections underneath, do it again for each of them

  // forEach selection in a force, add new item to master object
  // if that selections $.name matches a key already in master object, skip it
  // if it does not, add a new key of selection.$.name
  // its value should be an object of all its profile `typeName`s
  // each of those `typeName` keys will have values of all the profiles that match
  // for that selection and all child selections

  const force = {};

  // console.log(
  //   "data: ",
  //   data.selections[0].selection.map((s) => s.$.name)
  // );

  data.selections[0].selection.forEach((selection) => {
    // console.log("selection; ", selection.profiles[0] ? "yep" : "nope");
    if (selection.$) {
      if (force[selection.$.name]) {
        null;
      } else {
        force[selection.$.name] = {};
      }
    }
    selection.profiles[0] !== ""
      ? selection.profiles[0].profile.forEach((item) => {
          if (item.$) {
            if (force[selection.$.name][item.$.typeName]) {
              force[selection.$.name][item.$.typeName].push(
                item.characteristics[0].characteristic
              );
            } else {
              force[selection.$.name][item.$.typeName] = [
                item.characteristics[0].characteristic,
              ];
            }
          }
        })
      : null;
  });

  console.log("force: ", force);
  return force;
}

export default function rosAdapter() {
  console.log(
    "rosAdapter: ",
    ros.roster.forces[0].force,
    ros.roster.forces[0].force.reduce((acc, force) => {
      let list = digDeeper(force);
      console.log("list: ", list);
      console.log("acc", acc);
      return { ...acc, ...list };
    }, {})
  );
}
