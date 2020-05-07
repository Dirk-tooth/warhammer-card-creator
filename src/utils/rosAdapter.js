import ros from "../test_data/Z - HQ 2000.ros";

function buildProfileObject(data, initObj) {
  return data.reduce(
    (acc, char) => Object.assign(acc, { [char.$.name]: char._ }),
    initObj ? initObj : {}
  );
}

function addToExistingTypeName(profileAcc, profile) {
  // if that typeName is already in the list, add this profile to it

  return {
    ...profileAcc,
    [profile.$.typeName]: [
      ...profileAcc[profile.$.typeName],
      buildProfileObject(profile.characteristics[0].characteristic, {
        name: profile.$.name,
      }),
    ],
  };
}

function addNewTypeName(profileAcc, profile) {
  // if it is not already in the list, create the list and add this profile to it
  return {
    ...profileAcc,
    [profile.$.typeName]: [
      buildProfileObject(profile.characteristics[0].characteristic, {
        name: profile.$.name,
      }),
    ],
  };
}

function reduceSelectionProfiles(profileAcc, profile) {
  if (profileAcc[profile.$.typeName]) {
    // if that typeName is already in the list, add this profile to it
    return addToExistingTypeName(profileAcc, profile);
  } else {
    // if it is not already in the list, create the list and add this profile to it
    return addNewTypeName(profileAcc, profile);
  }
}

function createProfileList(selection) {
  const mapObj = { name: selection.$ ? selection.$.name : "no name" };
  if (selection.profiles && selection.profiles[0] !== "") {
    // if there are meaningful profiles
    return selection.profiles[0].profile.reduce(
      // create an object with each typeName and and array of profiles matching that typeName
      (profileAcc, profile) => {
        return reduceSelectionProfiles(profileAcc, profile);
      },
      { name: selection.$.name } // the object starts out with the name of the selection
    );
  } else {
    return {
      name: selection.$ ? selection.$.name : "no name",
      profiles: false,
    }; // if there are not any meaningful profiles, do nothing
  }
}

const recursiveVariable = [];

function listSelections(data) {
  if (data.selections && data.selections[0] !== "") {
    recursiveVariable.push(
      data.selections[0].selection.map((selection) =>
        createProfileList(selection)
      )
    );
    data.selections[0].selection.map((selection) => listSelections(selection));
  } else {
  }
}

export default function rosAdapter() {
  ros.roster.forces[0].force.map((force) => {
    // force.selections[0].selection.map((selection) => listSelections(selection));
    return listSelections(force);
  });

  console.log(recursiveVariable);

  const finalList = ros.roster.forces[0].force.reduce((acc, force) => {
    let list = createSelectionsList(force);
    return [...acc, ...list];
  }, []);

  return finalList;
}
