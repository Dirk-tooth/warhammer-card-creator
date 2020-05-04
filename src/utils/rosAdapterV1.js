import ros from "../test_data/Z - HQ 2000.ros";

function digDeeper(data) {
  // let force = {};

  // data.selections[0].selection.forEach((selection) => {
  // console.log("selection; ", selection.profiles[0] ? "yep" : "nope");
  // if (selection.$) {
  //   if (force[selection.$.name]) {
  //     null;
  //   } else {
  //     force[selection.$.name] = {};
  //   }
  // }

  force =
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
  // });

  // console.log("force: ", force);
  // return force;

  return data.selections[0].selection.reduce((selectionAcc, selection) => {
    if (selection.$) {
      if (selection.profiles[0] !== "") {
        return selection.profiles[0].profile.reduce((profileAcc, profile) => {},
        {});
      }
    }
  });
}

export default function rosAdapter() {
  console.log(
    "rosAdapter: ",
    ros.roster.forces[0].force,
    ros.roster.forces[0].force.reduce((acc, force) => {
      let list = digDeeper(force);
      console.log("list: ", list);
      console.log("acc", acc);
      return [...acc, ...list];
    }, [])
  );
}
