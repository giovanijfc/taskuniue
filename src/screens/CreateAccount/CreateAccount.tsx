import React, { useState } from 'react';
import firebase from 'firebase';

import * as Styled from './styles';
import userimg from 'assets/icons/user.svg';
import { useHistory } from 'react-router-dom';

const CreateAccount = () => {
  const history = useHistory();

  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const forgPush = () => {
    history.push('/ForgotPassword');
  };

  const loginPush = () => {
    history.push('/login');
  };

  return (
    <Styled.Container>
      <Styled.Form
        action=''
        onSubmit={event => {
          setLoading(true);

          event.preventDefault();

          firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .catch(function (error) {
              var errorCode = error.code;
              var errorMessage = error.message;
              console.log(errorCode, errorMessage);
            });
        }}
      >
        <Styled.Title>Seja bem Vindo</Styled.Title>
        <Styled.Img src={userimg} width='100' height='100' alt='' />
        <Styled.Input
          onChange={event => {
            setEmail(event.target.value);
          }}
          type='text'
          placeholder='Digite o Seu Email'
        />
        <Styled.Input
          onChange={event => {
            setPassword(event.target.value);
          }}
          type='password'
          placeholder='Senha'
        />
        <p>
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
