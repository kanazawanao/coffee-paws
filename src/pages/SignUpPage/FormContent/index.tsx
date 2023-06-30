import React from 'react';
import { useAuthApi } from 'api/hooks/AuthApi';

export default function FormContent() {
  const { signUpRequest } = useAuthApi();
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleEmailChange = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setEmail(event.target.value);
    },
    [],
  );

  const handlePasswordChange = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setPassword(event.target.value);
    },
    [],
  );

  const handleSubmit = React.useCallback(
    async (event: React.FormEvent) => {
      event.preventDefault();
      await signUpRequest(email, password);
      console.log(email, password);
    },
    [email, password, signUpRequest],
  );

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor='email'>メールアドレス</label>
        <input id='email' type='email' onChange={handleEmailChange} />
      </div>
      <div>
        <label htmlFor='password'>パスワード</label>
        <input id='password' type='password' onChange={handlePasswordChange} />
      </div>
      <button type='submit'>登録する</button>
    </form>
  );
}
