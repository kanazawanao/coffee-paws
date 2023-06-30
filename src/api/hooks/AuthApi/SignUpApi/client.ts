import ApiClient from 'api/hooks/ApiClient';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from 'infrastructure/firebase';

class SignUpApiClient extends ApiClient {
  async signUp(email: string, password: string) {
    await createUserWithEmailAndPassword(auth, email, password);
  }
}

export const client = new SignUpApiClient();
