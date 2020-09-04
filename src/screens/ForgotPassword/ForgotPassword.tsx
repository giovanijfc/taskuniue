import React from 'react';

import * as Styled from './styles';
import userimg from 'assets/icons/user.svg';
import { useHistory } from 'react-router-dom';

const ForgotPassword = () => {
  const history = useHistory();

  const loginPush = () => {
    history.push('/login');
  };
  const createPush = () => {
    history.push('/CreateAccount');
  };

  return (
    <Styled.Container>
      <Styled.Form action=''>
        <Styled.Title>Seja bem Vindo</Styled.Title>
        <Styled.Text>
          Para redefinir a sua senha Digite o seu email ou usuario!
        </Styled.Text>
        <Styled.Img src={userimg} width='100' height='100' alt='' />
        <Styled.Input type='text' placeholder='Nome de Usuario ou Email' />
        <p>
          <Styled.Button type='submit' value='Submit'>
            Redefinir Senha!
          </Styled.Button>
        </p>
        <Styled.Span onClick={loginPush}>Fazer Login</Styled.Span>
        <Styled.Span onClick={createPush}>Ainda não possui Conta?</Styled.Span>
      </Styled.Form>
    </Styled.Container>
  );
};

export default ForgotPassword;
