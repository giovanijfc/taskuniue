import React from 'react';

import * as Styled from './styles';
import userimg from '../../assets/icons/user.svg';
import styled from 'styled-components';

const LoginScreen = () => {
  return (
    <Styled.Container>
      <Styled.Form action=''>
        <Styled.Title>Member Login</Styled.Title>
        <Styled.Img src={userimg} width='100' height='100' alt='' />
        <Styled.Input type='text' name='' placeholder='Username or email' />
        <Styled.Input type='password' name='' placeholder='password' />
        <p>
          <a href='#'>Create account?</a>
          <a href='#'>Forgot password?</a>
          <Styled.button type='submit' value='Submit'>
            Login
          </Styled.button>
        </p>
      </Styled.Form>
    </Styled.Container>
  );
};

export default LoginScreen;
