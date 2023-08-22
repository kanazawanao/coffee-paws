import { useStoresApi } from 'api/hooks/StoreApi';
import Button from 'components/Button';
import SidePanel from 'components/SidePanel';
import React from 'react';
import FormContent from './FormContent';

export default function StoresPage() {
  const { stores } = useStoresApi();
  const [openSidePanel, setOpenSidePanel] = React.useState(false);
  return (
    <>
      {stores.map((store) => (
        <div key={store.id}>{store.name}</div>
      ))}
      <Button onClick={() => setOpenSidePanel(true)}>お店の登録</Button>
      {openSidePanel && (
        <SidePanel
          title='お店の新規登録'
          onClose={() => setOpenSidePanel(false)}
        >
          <FormContent onSubmit={() => console.log('登録')} />
        </SidePanel>
      )}
    </>
  );
}
