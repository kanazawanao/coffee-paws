import { usePlaceSearchApi } from 'api/hooks/PlaceSearchApi';
import Form from 'components/forms/Form';
import InputText from 'components/forms/InputText';
import React from 'react';

export default function PlaceSearchForm() {
  const [keyword, setKeyword] = React.useState('');
  const { searchNearby } = usePlaceSearchApi();

  const handleSubmit = React.useCallback(async () => {
    console.log(keyword);
    const result = await searchNearby(keyword);
    console.log(result);
  }, [keyword, searchNearby]);

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
