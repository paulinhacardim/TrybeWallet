// Coloque aqui suas actions
export const USER_FORM = 'USER_FORM';

export const dadosLogin = (email) => ({
  type: USER_FORM,
  payload: email,
});
