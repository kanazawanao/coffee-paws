import { createUserWithEmailAndPassword } from 'firebase/auth';
import ApiClient from '../../ApiClient';
import { auth } from 'infrastructure/firebase';

class SignUpRequestApiClient extends ApiClient {
  async signUpRequest(email: string, password: string) {
    await createUserWithEmailAndPassword(auth, email, password);
  }
}

export const client = new SignUpRequestApiClient();
