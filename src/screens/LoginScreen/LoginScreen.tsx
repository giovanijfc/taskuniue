import React from 'react';

import * as Styled from './styles';
import userimg from 'assets/icons/user.svg';
import styled from 'styled-components';

const LoginScreen = () => {
  return (
    <Styled.Container>
      <Styled.Form action=''>
        <Styled.Span>Create account?</Styled.Span>
        <Styled.Title>Member Login</Styled.Title>
        <Styled.Img src={userimg} width='100' height='100' alt='' />
        <Styled.Input type='text' placeholder='Username or email' />
        <Styled.Input type='password' placeholder='password' />
        <p>
          <input type='checkbox' id='Remember me'></input>
          <label>Remember me</label>
          <a href='#'>Forgot password?</a>
          <Styled.Button type='submit' value='Submit'>
            Login
          </Styled.Button>
        </p>
      </Styled.Form>
    </Styled.Container>
  );
};

export default LoginScreen;
