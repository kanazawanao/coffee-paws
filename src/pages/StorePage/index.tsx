import { useStoreApi } from 'api/hooks/StoreApi';
import Button from 'components/Button';
import SidePanel from 'components/SidePanel';
import React from 'react';
import { useParams } from 'react-router-dom';
import FormContent from './FormContent';
import { useBeansApi } from 'api/hooks/BeanApi';
import Bean from 'models/Bean';

export default function StorePage() {
  const storeId = useParams<{ id: string }>().id || '';
  const { store } = useStoreApi(storeId);
  const { beans, createBean } = useBeansApi(storeId);
  const [openSidePanel, setOpenSidePanel] = React.useState(false);

  const handleSubmit = React.useCallback(
    (bean: Bean) => {
      createBean(storeId, bean);
      setOpenSidePanel(false);
    },
    [createBean, storeId],
  );

  console.log(beans);
  return (
    <>
      <div>{store?.name}</div>
      <Button onClick={() => setOpenSidePanel(true)}>豆の登録</Button>
      {openSidePanel && (
        <SidePanel
          title='お店の新規登録'
          onClose={() => setOpenSidePanel(false)}
        >
          <FormContent storeId={storeId} onSubmit={handleSubmit} />
        </SidePanel>
      )}
    </>
  );
}
