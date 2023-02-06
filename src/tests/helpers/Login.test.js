// import React from 'react';
// import userEvent from '@testing-library/user-event';
// import { screen } from '@testing-library/react';
// import App from '../App';
// // import { renderWithRouterAndRedux } from '.helpers/renderWith';

// describe('Testes do componente Login', () => {
//   it('Teste se está funcionando', () => {
//     renderWithRouterAndRedux(<App />);

//     const email = screen.getByRole('textbox', { name: 'email' });
//     expect(email).toBeInTheDocument();

//     const password = screen.getByLabelText('senha');
//     expect(password).toBeInTheDocument();

//     const button = screen.getByRole('button', { name: 'Entrar' });
//     expect(button.disabled).toBe();
//   });

//   it('Testando preenchimento dos dados iniciais e atualiza a rota', () => {
//     renderWithRouterAndRedux(<App />);

//     const senhaEmail = 'tybe@trybe.com';
//     const email = screen.getByLabelText(/email/i);
//     userEvent.type(email, senhaEmail);
//     expect(email.value).toBe('trybe@trybe.com');

//     const button = screen.getByRole('button', { name: 'Entrar' });
//     expect(button.disabled).toBe();

//     const dadosPassword = '123456';
//     const password = screen.getAllByLabelText('senha');
//     userEvent.type(password, dadosPassword);
//     expect(password.value).toBe('123456');

//     expect(button.disabled).toBe();

//     userEvent.click('button');
//   });
// });
