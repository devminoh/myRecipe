import styled from 'styled-components';

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
  padding: 22px;
  background-color: #F7E1AE;
  border-radius: 15px;
  cursor: pointer;

  .title {
    display: flex;
    justify-content: flex-end;
    margin: 10px 0;
  }
`;