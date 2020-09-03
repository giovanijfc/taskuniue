import React, { useState } from 'react';
import firebase from 'firebase';

import * as Styled from './styles';
import userimg from 'assets/icons/user.svg';
import { useHistory } from 'react-router-dom';

const ForgotPassword = () => {
  const [loading, setLoading] = useState(false);
  const [emailAddress, setEmailAddress] = useState('');

  const history = useHistory();

  const loginPush = () => {
    history.push('/login');
  };
  const createPush = () => {
    history.push('/CreateAccount');
  };

  return (
    <Styled.Container>
      <Styled.Form
        action=''
        onSubmit={event => {
          setLoading(true);

          event.preventDefault();

          var auth = firebase.auth();

          auth
            .sendPasswordResetEmail(emailAddress)
            .then(function () {})
            .catch(function (error) {});
          console.log(emailAddress);
        }}
      >
        <Styled.Title>Seja bem Vindo</Styled.Title>
        <Styled.Text>
          Para redefinir a sua senha Digite o seu email!
        </Styled.Text>
        <Styled.Img src={userimg} width='100' height='100' alt='' />
        <Styled.Input
          onChange={event => {
            setEmailAddress(event.target.value);
          }}
          type='text'
          placeholder='Informe o seu Email'
        />
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
