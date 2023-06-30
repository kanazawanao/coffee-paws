import { signInWithEmailAndPassword } from 'firebase/auth';
import ApiClient from '../../ApiClient';
import { auth } from 'infrastructure/firebase';

class SignInApiClient extends ApiClient {
  async signIn(email: string, password: string) {
    await signInWithEmailAndPassword(auth, email, password);
  }
}

export const client = new SignInApiClient();
