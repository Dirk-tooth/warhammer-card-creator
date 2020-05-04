import ros from "../test_data/Z - HQ 2000.ros";

function digDeeper(data) {
  const force = data.selections[0].selection.map((selection) => {
    const mapObj = { name: selection.$.name };

    if (selection.profiles[0] !== "") {
      return selection.profiles[0].profile.reduce(
        (profileAcc, profile) => {
          if (profileAcc[profile.$.typeName]) {
            return {
              ...profileAcc,
              [profile.$.typeName]: [
                ...profileAcc[profile.$.typeName],
                profile.characteristics[0].characteristic,
              ],
            };
          } else {
            return {
              ...profileAcc,
              [profile.$.typeName]: [profile.characteristics[0].characteristic],
            };
          }
        },
        { name: selection.$.name }
      );
    } else {
      return { ...mapObj, profiles: false };
    }
  });

  console.log("force: ", force);
  return force;
}

export default function rosAdapter() {
  console.log(
    "rosAdapter: ",
    // ros.roster.forces[0].force,
    ros.roster.forces[0].force.reduce((acc, force) => {
      let list = digDeeper(force);
      // console.log("list: ", list);
      // console.log("acc", acc);
      return [...acc, ...list];
    }, [])
  );
}
