import { useStoresApi } from 'api/hooks/StoreApi';
import Button from 'components/Button';
import SidePanel from 'components/SidePanel';
import React from 'react';
import FormContent from './FormContent';
import { useCoffeePawsNavigate } from 'routes/hook';
import Store from 'models/Store';

export default function StoresPage() {
  const { goToStorePage } = useCoffeePawsNavigate();
  const { stores, createStore } = useStoresApi();
  const [openSidePanel, setOpenSidePanel] = React.useState(false);

  const handleSubmit = React.useCallback(
    (store: Store) => {
      createStore(store);
      setOpenSidePanel(false);
    },
    [createStore],
  );
  return (
    <>
      {stores.map((store) => (
        <div key={store.id} onClick={() => goToStorePage(store.id)}>
          {store.name}
        </div>
      ))}
      <Button onClick={() => setOpenSidePanel(true)}>お店の登録</Button>
      {openSidePanel && (
        <SidePanel
          title='お店の新規登録'
          onClose={() => setOpenSidePanel(false)}
        >
          <FormContent onSubmit={handleSubmit} />
        </SidePanel>
      )}
    </>
  );
}
