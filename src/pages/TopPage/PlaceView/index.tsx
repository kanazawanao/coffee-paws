import Place from 'models/Place';
import React from 'react';

type Props = {
  place: Place;
  onClick: (place: Place) => void;
};
export default function PlaceView({ place, onClick }: Props) {
  const handleClick = React.useCallback(() => {
    onClick(place);
  }, [onClick, place]);

  return (
    <div onClick={handleClick}>
      <div>{place.name}</div>
      {place.photoUrls.length > 0 && <img src={place.photoUrls[0]} />}
    </div>
  );
}
