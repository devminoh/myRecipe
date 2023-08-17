import styled from 'styled-components';

export const CardWrapper = styled.div`
  display: grid;
  justify-items: center;
  grid-template-columns: repeat(4, 1fr);
  row-gap: 20px;
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
  padding: 22px;
  background-color: #8294c4;
  border-radius: 15px;
  cursor: pointer;
  box-shadow: 0 5px 10px 0 #8294c4;

  .title {
    display: flex;
    justify-content: flex-end;
    margin: 10px 0;
    color: white;
    font-weight: 400;
  }

  &:hover {
    opacity: 0.7;
    transition: opacity 1s ease-out;
  }
`;