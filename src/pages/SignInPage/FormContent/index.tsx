export default function FormContent() {
  return (
    <form>
      <div>
        <label htmlFor='email'>メールアドレス</label>
        <input id='email' type='email' />
      </div>
      <div>
        <label htmlFor='password'>パスワード</label>
        <input id='password' type='password' />
      </div>
      <button>サインインする</button>
    </form>
  );
}
