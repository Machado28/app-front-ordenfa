import { toast } from 'react-toastify';

import { api } from './api';

 

const delay = (amoutn = 750) =>
  new Promise((resolve) => setTimeout(resolve, amoutn));

export function signInRequest(data) {
  api
    .post('/session', data)
    .then((response) => response.data)
    .catch(({ response }) => {
      
      toast.error(response?.data?.error);
    });
    return any
}

export async function signOutRequest() {
  await delay();
  return {
    success: true,
  };
}

export async function recoverUserInformation() {
  await delay();

  return {
    user: {
      name: 'John Doe',
      email: 'johndoe@gmail.com',
      avatar_url: 'https://github.com/jgoncalves8080.png',
    },
  };
}
