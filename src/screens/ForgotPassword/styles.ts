import styled from 'styled-components';

import lgbgImg from 'assets/images/lgbg.jpg';
import COLORS from 'styles/guides/colors';
import SPACING from 'styles/guides/spacing';

export const Img = styled.img`
  position: absolute;
  top: -50px;
  left: 198px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  background: url(${lgbgImg});
  background-repeat: no-repeat;
  background-size: cover;
  width: 100vw;
  height: 100vh;

  a {
    line-break: keep-all;
    font-weight: bold;
    font-size: 19px;
    line-height: 28px;
    color: black;
    text-decoration: none;

    :hover {
      transition: 0.2s;
      color: #ff4d4d;
    }
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 500px;
  height: 440px;
  border: 2px solid #000;
  border-radius: 15px;
  color: rgb(0, 0, 0);
  background-color: white;
  top: 50%;
  left: 50%;
  position: absolute;
  transform: translate(-50%, -50%);
  box-sizing: border-box;
  padding: ${SPACING.default};
`;

export const Title = styled.h1`
  text-transform: uppercase;
  text-align: center;
  font-size: 25px;
`;

export const Text = styled.h4`
  text-transform: uppercase;
  text-align: center;
  font-size: 15px;
`;
export const Input = styled.input`
  width: 100%;
  padding: 12px 20px;
  box-sizing: border-box;
  border-radius: 1px black;
  outline: nome;
  height: 40px;
  color: black;
  font-size: 16px;
`;

export const Button = styled.button`
  font-size: 19px;
  box-sizing: border-box;
  display: block;
  border: 0;
  outline: none;
  height: 35px;
  width: 405px;
  color: #000;
  background: #907aff;
  border-radius: 20px;
  cursor: pointer;

  :hover {
    cursor: pointer;
    background: #ffadad;
    transition: 0.2s;
  }
`;

export const Span = styled.span`
  display: flex;
  flex-direction: column;
  margin-top: ${SPACING.small};

  :hover {
    cursor: pointer;
    transition: 0.2s;
  }
`;
