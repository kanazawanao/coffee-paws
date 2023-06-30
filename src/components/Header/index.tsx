import { useAuthApi } from 'api/hooks/AuthApi';

export default function Headre() {
  const { user, signOut } = useAuthApi();
  return <>{user && <div onClick={signOut}>ログアウト</div>}</>;
}
