import React, { useState } from 'react';
import firebase from 'firebase';

import * as Styled from './styles';
import userimg from 'assets/icons/user.svg';
import { useHistory } from 'react-router-dom';

const LoginScreen = () => {
  const history = useHistory();

  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const forgPush = () => {
    history.push('/ForgotPassword');
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

          firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then(() => {
              setLoading(false);
              history.replace('/kanban');
            })
            .catch(function (error) {
              setLoading(false);
              var errorCode = error.code;
              alert(errorCode);
            });
        }}
      >
        <Styled.Title>Seja bem Vindo</Styled.Title>
        <Styled.Img src={userimg} width='100' height='100' alt='' />
        {loading ? (
          <label>loading</label>
        ) : (
          <div>
            <Styled.Input
              onChange={event => {
                setEmail(event.target.value);
              }}
              type='text'
              placeholder='Nome de Usuario ou Email'
            />
            <Styled.Input
              onChange={event => {
                setPassword(event.target.value);
              }}
              type='password'
              placeholder='Senha'
            />
            <p>
              <input type='checkbox' id='Lembrar me'></input>
              <Styled.Label>Lembrar me</Styled.Label>
              <a onClick={forgPush}>Esqueceu sua senha?</a>
              <Styled.Button type='submit' value='Submit'>
                Login
              </Styled.Button>
            </p>
            <Styled.Span onClick={createPush}>
              Ainda não possui Conta?
            </Styled.Span>
          </div>
        )}
      </Styled.Form>
    </Styled.Container>
  );
};

export default LoginScreen;
