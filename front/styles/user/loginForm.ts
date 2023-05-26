import styled from 'styled-components';
import { Button, Form } from 'antd';

export const ButtomWrapper = styled.div`
  margin-top: 10px;
`;

export const FormWrapper = styled(Form)`
  padding: 10px;
  height: 100vh;
`;

export const LoginBtn = styled(Button)`
  background-color: #617a55;
  color: white;
  border: none;

  &:hover {
    background-color: #F7E1AE;
    color: white;
    border: none;
  }
`;

export const SignUpBtn = styled(Button)`
  color: #617a55;
  border: 1px solid #617a55;

  &:hover {
    border: 1px solid #617a55;
  }
`;