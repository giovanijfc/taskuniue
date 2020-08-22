import React from 'react';

import * as Styled from './styles';

const LoginScreen = () => {
  return (
    <Styled.Container>
      <img src='../../assets/icons/user.svg' width='100' height='100' alt='' />
      <h1>Member Login</h1>
      <form action=''>
        <input type='text' name='' placeholder='Username or email' />
        <input type='password' name='' placeholder='password' />
        <p>
          <a href='#'>Create account?</a>
          <a href='#'>Forgot password?</a>
          <input type='submit' name='' value='Login' />
        </p>
      </form>
    </Styled.Container>
  );
};

export default LoginScreen;
