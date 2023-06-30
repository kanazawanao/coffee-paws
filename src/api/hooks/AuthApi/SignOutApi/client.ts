import ApiClient from 'api/hooks/ApiClient';
import { signOut as signOutFromFirebase } from 'firebase/auth';
import { auth } from 'infrastructure/firebase';

class SignOutApiClient extends ApiClient {
  async signOut() {
    await signOutFromFirebase(auth);
  }
}

export const client = new SignOutApiClient();
