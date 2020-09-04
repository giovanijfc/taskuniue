import React, { useState } from 'react';

import * as Styled from './styles';
import userimg from 'assets/icons/user.svg';
import { useHistory } from 'react-router-dom';

const CreateAccount = () => {
  const history = useHistory();

  const forgPush = () => {
    history.push('/ForgotPassword');
  };

  const loginPush = () => {
    history.push('/login');
  };

  return (
    <Styled.Container>
      <Styled.Form action=''>
        <Styled.Title>Seja bem Vindo</Styled.Title>
        <Styled.Img src={userimg} width='100' height='100' alt='' />
        <Styled.Input type='text' placeholder='Digite o Seu Email' />
        <Styled.Input type='password' placeholder='Senha' />
        <p>
          <input type='checkbox' id='Lembrar me'></input>
          <Styled.Label>Lembrar me</Styled.Label>
          <a onClick={forgPush}>Esqueceu sua senha?</a>
          <Styled.Button type='submit' value='Submit'>
            Cadastrar
          </Styled.Button>
        </p>
        <Styled.Span onClick={loginPush}>Ja possui Conta?</Styled.Span>
      </Styled.Form>
    </Styled.Container>
  );
};

export default CreateAccount;
