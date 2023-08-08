import Button from 'components/Button';
import Form from 'components/forms/Form';
import InputText from 'components/forms/InputText';
import React from 'react';

type Props = {
  onSubmit: (keyword: string) => void;
};
export default function SearchNearbyForm({ onSubmit }: Props) {
  const [keyword, setKeyword] = React.useState('');

  const handleSubmit = React.useCallback(async () => {
    onSubmit(keyword);
  }, [keyword, onSubmit]);

  return (
    <Form onSubmit={handleSubmit}>
      <InputText
        id='keyword'
        type='text'
        label='地名'
        placeholder='荻窪'
        onChange={setKeyword}
      />
      <Button type='submit'>コーヒー豆売ってそうなところを検索する</Button>
    </Form>
  );
}
