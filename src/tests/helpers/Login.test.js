import React from 'react';
import userEvent from '@testing-library/user-event';
import { screen } from '@testing-library/react';
import App from '../../App';
import { renderWithRouterAndRedux } from './renderWith';

describe('Testes do componente Login', () => {
  it('Teste se está funcionando', () => {
    renderWithRouterAndRedux(<App />);

    const email = screen.getByRole('textbox', { name: 'Email' });
    expect(email).toBeInTheDocument();

    const password = screen.getByLabelText('Senha');
    expect(password).toBeInTheDocument();

    const button = screen.getByRole('button', { name: 'Entrar' });
    expect(button.disabled).toBe(true);
  });

  it('Testando preenchimento dos dados iniciais e atualiza a rota', () => {
    renderWithRouterAndRedux(<App />);

    const senhaEmail = 'trybe@trybe.com';
    const email = screen.getByLabelText(/email/i);
    userEvent.type(email, senhaEmail);
    expect(email.value).toBe('trybe@trybe.com');

    const button = screen.getByRole('button', { name: 'Entrar' });
    expect(button.disabled).toBe(true);

    const dadosPassword = '123456';
    const password = screen.getByLabelText('Senha');
    userEvent.type(password, dadosPassword);
    expect(password.value).toBe('123456');

    expect(button.disabled).toBe(false);

    userEvent.click(button);
  });

  it('teste de rotas', () => {
    const carteiraRota = ['/carteira'];
    const { history } = renderWithRouterAndRedux(<App />, { carteiraRota });
    const { pathname } = history.location;
    expect(pathname).toBe('/');
  });
});
