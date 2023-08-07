import Form from 'components/forms/Form';
import InputSelect from 'components/forms/InputSelect';
import InputText from 'components/forms/InputText';
import PlaceType, { createPlaceTypeSelectOptions } from 'models/PlaceType';
import React from 'react';

type Props = {
  placeTypes: PlaceType[];
  onSubmit: (keyword: string, placeType: string) => void;
};
export default function SearchNearbyForm({ placeTypes, onSubmit }: Props) {
  const [keyword, setKeyword] = React.useState('');
  const [placeType, setPlaceType] = React.useState('');
  const placeTypeSelectOptions = createPlaceTypeSelectOptions(placeTypes);

  const handleSubmit = React.useCallback(async () => {
    onSubmit(keyword, placeType);
  }, [keyword, onSubmit, placeType]);

  return (
    <Form onSubmit={handleSubmit}>
      <InputSelect
        id='placeType'
        label='カテゴリ'
        options={placeTypeSelectOptions}
        onChange={setPlaceType}
      />
      <InputText
        id='keyword'
        type='text'
        label='キーワード'
        onChange={setKeyword}
      />
    </Form>
  );
}
