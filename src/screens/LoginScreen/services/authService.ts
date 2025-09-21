import AsyncStorage from '@react-native-async-storage/async-storage';

const CREDENTIALS_KEY = 'userCredentials';
const TOKEN_KEY = 'userToken';

type StoredCredentials = { email: string; password: string };

export const authService = {
  async getStoredCredentials(): Promise<StoredCredentials | null> {
    try {
      const json = await AsyncStorage.getItem(CREDENTIALS_KEY);
      return json ? JSON.parse(json) : null;
    } catch (e) {
      console.error('getStoredCredentials error', e);
      return null;
    }
  },

  async signIn(email: string, password: string): Promise<{ ok: boolean; error?: string }> {
    const creds = await this.getStoredCredentials();
    if (!creds) return { ok: false, error: 'Nenhum cadastro encontrado. Faça seu registro primeiro.' };

    const ok = creds.email === email && creds.password === password;
    if (!ok) return { ok: false, error: 'E-mail ou senha incorretos' };

    await AsyncStorage.setItem(TOKEN_KEY, 'dummy-token');
    return { ok: true };
  },

  async isSignedIn(): Promise<boolean> {
    const token = await AsyncStorage.getItem(TOKEN_KEY);
    return !!token;
  },

  async signOut(): Promise<void> {
    await AsyncStorage.removeItem(TOKEN_KEY);
  },
};
