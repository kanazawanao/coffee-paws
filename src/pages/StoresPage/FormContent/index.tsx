import Button from 'components/Button';
import GridContainer from 'components/GridContainer';
import Form from 'components/forms/Form';
import InputSwitch from 'components/forms/InputSwitch';
import InputText from 'components/forms/InputText';
import React from 'react';

type Props = {
  onSubmit: (storeName: string, address: string, url: string) => void;
};

export default function FormContent({ onSubmit }: Props) {
  const [checked, setChecked] = React.useState(false);
  const [storeName, setStoreName] = React.useState('');
  const [address, setAddress] = React.useState('');
  const [url, setUrl] = React.useState('');

  const handleSubmit = React.useCallback(() => {
    onSubmit(storeName, address, url);
  }, [address, onSubmit, storeName, url]);

  return (
    <Form onSubmit={handleSubmit}>
      <GridContainer>
        <InputSwitch
          id='storeType'
          label='お店のタイプ'
          checked={checked}
          enabledLabel='ECサイト'
          disabledLabel='Web'
          onChange={setChecked}
        />
        <InputText
          id='storeName'
          type='text'
          label='店名 or サイト名'
          onChange={setStoreName}
        />
        <InputText
          id='address'
          type='text'
          label='お店の住所'
          onChange={setAddress}
        />
        <InputText id='url' type='text' label='サイトのURL' onChange={setUrl} />
        <Button type='submit'>お店登録</Button>
      </GridContainer>
    </Form>
  );
}
