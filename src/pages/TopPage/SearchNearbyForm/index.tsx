import Form from 'components/forms/Form';
import InputSelect from 'components/forms/InputSelect';
import InputText from 'components/forms/InputText';
import React from 'react';

type Props = {
  onSubmit: (keyword: string) => void;
};
export default function SearchNearbyForm({ onSubmit }: Props) {
  const [keyword, setKeyword] = React.useState('');
  const [placeType, setPlaceType] = React.useState('');

  const handleSubmit = React.useCallback(async () => {
    console.log(placeType);
    onSubmit(keyword);
  }, [keyword, onSubmit, placeType]);

  return (
    <Form onSubmit={handleSubmit}>
      <InputSelect
        id='placeType'
        label='カテゴリ'
        options={[
          { label: 'test', value: 'test' },
          { label: '1', value: '2' },
        ]}
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
