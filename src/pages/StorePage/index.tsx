import { useStoreApi } from 'api/hooks/StoreApi';
import Button from 'components/Button';
import SidePanel from 'components/SidePanel';
import React from 'react';
import { useParams } from 'react-router-dom';
import FormContent from './FormContent';
import { useBeansApi } from 'api/hooks/BeanApi';
import Bean from 'models/Bean';

export default function StorePage() {
  const id = useParams<{ id: string }>().id || '';
  const { store } = useStoreApi(id);
  const { createBean } = useBeansApi();
  const [openSidePanel, setOpenSidePanel] = React.useState(false);

  const handleSubmit = React.useCallback(
    (bean: Bean) => {
      createBean(id, bean);
      setOpenSidePanel(false);
    },
    [createBean, id],
  );
  return (
    <>
      <div>{store?.name}</div>
      <Button onClick={() => setOpenSidePanel(true)}>豆の登録</Button>
      {openSidePanel && (
        <SidePanel
          title='お店の新規登録'
          onClose={() => setOpenSidePanel(false)}
        >
          <FormContent storeId={id} onSubmit={handleSubmit} />
        </SidePanel>
      )}
    </>
  );
}
