# NOTES

NEW PLAN! (its not the same plan... )

iterate through each layer of selections and pull each profile `typeName` and let the card figure out what to do with each `typeName`

```
Skyweavers: {
  abilities: [name: description, ...],
  weapon: [name: {characteristic: value, ...}, ...],
  unit: [name: {characteristic: value, ...}, ...],
  psychicPower: [name: {characteristic: value, ...}, ...],
  psyker: [name: {characteristic: value, ...}, ...],
  woundTrack: [name: {characteristic: value, ...}, ...],
  [typeName]: [name: data, ...],
}
```
