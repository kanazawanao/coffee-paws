import Place from 'models/Place';

type Props = {
  place: Place;
};
export default function PlaceView({ place }: Props) {
  return (
    <div>
      <div>{place.name}</div>
      {place.photoUrls.length > 0 && <img src={place.photoUrls[0]} />}
    </div>
  );
}
