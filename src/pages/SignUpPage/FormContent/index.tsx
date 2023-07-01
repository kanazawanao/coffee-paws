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
      <div>
        <label htmlFor='email'>メールアドレス</label>
        <InputText id='email' type='email' onChange={setEmail} />
      </div>
      <div>
        <label htmlFor='password'>パスワード</label>
        <InputText id='password' type='password' onChange={setPassword} />
      </div>
      <button type='submit'>登録する</button>
    </Form>
  );
}
