import React from 'react';

import * as Styled from './styles';
import userimg from 'assets/icons/user.svg';

const CreateAccount = () => {
  return (
    <Styled.Container>
      <Styled.Form action=''>
        <Styled.Title>Seja bem Vindo</Styled.Title>
        <Styled.Img src={userimg} width='100' height='100' alt='' />
        <Styled.Input type='text' placeholder='Nome de Usuario ou Email' />
        <Styled.Input type='password' placeholder='Senha' />
        <p>
          <input type='checkbox' id='Lembrar me'></input>
          <Styled.Label>Lembrar me</Styled.Label>
          <a href='#'>Esqueceu sua senha?</a>
          <Styled.Button type='submit' value='Submit'>
            Login
          </Styled.Button>
        </p>
        <Styled.Span>Ainda não possui Conta?</Styled.Span>
      </Styled.Form>
    </Styled.Container>
  );
};

export default CreateAccount;
