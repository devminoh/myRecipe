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
  background-color: #8294c4;
  color: white;
  border: none;
  margin-right: 5px;

  &:hover {
    background-color: #f7e1ae;
    color: white;
    border: none;
  }
`;

export const SignUpBtn = styled(Button)`
  color: #8294c4;
  border: 1px solid #8294c4;

  &:hover {
    border: 1px solid #8294c4;
  }
`;


