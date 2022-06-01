import { createContext, useEffect, useState } from 'react';
import { setCookie, parseCookies } from 'nookies';
import Router from 'next/router';
import { recoverUserInformation, signInRequest } from '../services/auth';
import api from '../modules/auth/api/AuthApi';
import  Progress  from '../components/progress/index';

type AuthContextType = {
  isAuthenticated: boolean;
  loading: boolean;
  user: User | null;
  signIn: (data: SignInData) => Promise<void>;
};

type AuthProviderProps = {
  children: React.ReactNode;
};

type SignInData = {
  email: string;
  password: string;
};

type User = {
  name: string;
  email: string;
  avatar_url: string;
};

export const AuthContext = createContext({} as AuthContextType);

export function AuthProvider({ children }: AuthProviderProps) {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState<User | null>(null);

  const isAuthenticated = !!user;

  useEffect(() => {
    const { 'zuri-token': token } = parseCookies();
    if (token) {
      recoverUserInformation().then((response) => setUser(response.user));
    }
  }, []);

  useEffect(() => {
    console.log('loading => ', loading);
  }, [loading]);

  async function signIn({ email, password }: SignInData) {
    setLoading(true);
    const response = await signInRequest({
      email,
      password,
    });

    if (!response) return;
    const { token, user } = response;
    console.log('response response', response);

    setCookie(undefined, 'zuri-token', token, {
      maxAge: 30 * 60 * 1, //1 hora
    });
    api.defaults.headers.common.Authorization = `Bearer ${token}`;
    setUser(user);

    setLoading(false);
    console.log('aquii');
    Router.push('/');
  }
  return (
    <AuthContext.Provider value={{ isAuthenticated, user, signIn, loading }}>
      {children}
    </AuthContext.Provider>
  );
}
