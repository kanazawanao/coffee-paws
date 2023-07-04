import Button from 'components/Button';
import GridContainer from 'components/GridContainer';
import Form from 'components/forms/Form';
import InputText from 'components/forms/InputText';
import React from 'react';

type Props = {
  onSubmit: (email: string, password: string) => void;
};

export default function FormContent({ onSubmit }: Props) {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleSubmit = React.useCallback(() => {
    onSubmit(email, password);
  }, [email, onSubmit, password]);

  return (
    <Form onSubmit={handleSubmit}>
      <GridContainer>
        <InputText
          id='email'
          type='email'
          label='メールアドレス'
          onChange={setEmail}
        />
        <InputText
          id='password'
          type='password'
          label='パスワード'
          onChange={setPassword}
        />
        <Button type='submit'>会員登録</Button>
      </GridContainer>
    </Form>
  );
}
