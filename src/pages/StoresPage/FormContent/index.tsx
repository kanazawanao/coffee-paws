import Button from 'components/Button';
import GridContainer from 'components/GridContainer';
import Form from 'components/forms/Form';
import InputRadioGroup from 'components/forms/InputRadioGroup';
import InputText from 'components/forms/InputText';
import Store from 'models/Store';
import React from 'react';

type Props = {
  onSubmit: (store: Store) => void;
};

export default function FormContent({ onSubmit }: Props) {
  const [storeType, setStoreType] = React.useState('store');
  const [storeName, setStoreName] = React.useState('');
  const [address, setAddress] = React.useState('');
  const [url, setUrl] = React.useState('');

  const handleSubmit = React.useCallback(() => {
    const store: Store = {
      id: '',
      name: storeName,
      storeType: storeType,
      address: address,
      url: url,
    };
    onSubmit(store);
  }, [address, onSubmit, storeName, storeType, url]);

  return (
    <Form onSubmit={handleSubmit}>
      <GridContainer>
        <InputRadioGroup
          options={[
            { label: '実店舗', value: 'store' },
            { label: 'ECサイト', value: 'ec_store' },
          ]}
          selectedValue={storeType}
          onChange={setStoreType}
          id='storeType'
          label='お店の種類'
        />
        {storeType === 'store' && (
          <>
            <InputText
              id='storeName'
              type='text'
              label='店名'
              onChange={setStoreName}
            />

            <InputText
              id='address'
              type='text'
              label='お店の住所'
              onChange={setAddress}
            />
          </>
        )}
        {storeType === 'ec_store' && (
          <>
            <InputText
              id='storeName'
              type='text'
              label='サイト名'
              onChange={setStoreName}
            />
            <InputText
              id='url'
              type='text'
              label='サイトのURL'
              onChange={setUrl}
            />
          </>
        )}

        <Button type='submit'>お店登録</Button>
      </GridContainer>
    </Form>
  );
}
