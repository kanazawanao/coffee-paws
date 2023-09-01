import Button from 'components/Button';
import GridContainer from 'components/GridContainer';
import Form from 'components/forms/Form';
import InputText from 'components/forms/InputText';
import Bean from 'models/Bean';
import React from 'react';

type Props = {
  storeId: string;
  onSubmit: (Bean: Bean) => void;
};

export default function FormContent({ storeId, onSubmit }: Props) {
  const [productionArea, setProductionArea] = React.useState('');
  const [plantationName, setPlantationName] = React.useState('');
  const [kind, setKind] = React.useState('');
  const [roastLevel, setRoastLevel] = React.useState('');
  const handleSubmit = React.useCallback(() => {
    const bean: Bean = {
      id: '',
      storeId: storeId,
      productionArea: productionArea,
      plantationName: plantationName,
      kind: kind,
      roastLevel: roastLevel,
      price: null,
    };
    onSubmit(bean);
  }, [kind, onSubmit, plantationName, productionArea, roastLevel, storeId]);

  return (
    <Form onSubmit={handleSubmit}>
      <GridContainer>
        <InputText
          id='productionArea'
          type='text'
          label='生産国'
          onChange={setProductionArea}
        />
        <InputText
          id='plantationName'
          type='text'
          label='農園'
          onChange={setPlantationName}
        />
        <InputText id='kind' type='text' label='豆の種類' onChange={setKind} />
        <InputText
          id='roastLevel'
          type='text'
          label='焙煎度合い'
          onChange={setRoastLevel}
        />
        <Button type='submit'>登録</Button>
      </GridContainer>
    </Form>
  );
}
