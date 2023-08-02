import { usePlaceSearchApi } from 'api/hooks/PlaceSearchApi';
import Form from 'components/forms/Form';
import InputText from 'components/forms/InputText';
import React from 'react';

type Props = {
  onSubmit: (lat: number, lng: number) => void;
};
export default function SearchNearbyForm({ onSubmit }: Props) {
  const [keyword, setKeyword] = React.useState('');
  const { searchNearby } = usePlaceSearchApi();

  const handleSubmit = React.useCallback(async () => {
    const result = await searchNearby(keyword);
    if (result.records.length > 0) {
      onSubmit(result.records[0].lat, result.records[0].lng);
    }
  }, [keyword, onSubmit, searchNearby]);

  return (
    <Form onSubmit={handleSubmit}>
      <InputText
        id='keyword'
        type='text'
        label='キーワード'
        onChange={setKeyword}
      />
    </Form>
  );
}
