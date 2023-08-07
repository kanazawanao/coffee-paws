export default interface PlaceType {
  value: string;
  label: string;
}

export function createPlaceTypeSelectOptions(placeTypes: PlaceType[]) {
  const options = placeTypes.map((placeType) => {
    return { value: placeType.value, label: placeType.label };
  });
  options.unshift({ value: '', label: '' });
  return options;
}
