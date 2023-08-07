import Place from 'models/Place';
import React from 'react';

import styles from './style.module.css';

type Props = {
  place: Place;
  onClick: (place: Place) => void;
};
export default function PlaceView({ place, onClick }: Props) {
  const handleClick = React.useCallback(() => {
    onClick(place);
  }, [onClick, place]);

  return (
    <div className={styles.container} onClick={handleClick}>
      <img src={place.icon} />
      <div>{place.name}</div>
      {place.photoUrls.map((photoUrl, index) => (
        <img key={index} src={photoUrl} />
      ))}
    </div>
  );
}
