import styled from 'styled-components';

export const TopContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-bottom: 40px; 
  
  .TopRight {
    display: flex;
    flex-direction: column;
  }
`;

export const ImageContainer = styled.div``; 

export const SumContainer = styled.div`
  display: flex;
  flex-direction: column;
  /* input {
    display: none;
  } */
  button {
    border: 1px dotted #617a55;
    padding: 50px;
    border-radius: 5px;
  }

  .afterImg {
    display: flex;
    flex-direction: column;
    width: 120px;
    height: 120px;
  }
  .deleteImg {
    margin-top: 5px;
    background-color: #617a55;
    color: white;
    border: none;
    border-radius: 12px;
    padding: 5px 7px;
    cursor: pointer;
  }
`;

//title
export const Title = styled.div`
  font-size: 20px;
  font-weight: 800;
  color: #617a55;
  margin: 10px 0;
`;

// serve
export const Serve = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  height: fit-content;
  margin-bottom: 5px;
  div {
    display: flex;
    align-items: center;
    margin-left: 5px;
  }
`;

export const ServeShow = styled.div`
  color: #c07f00;
  font-size: 15px;
`;
export const Select = styled.select`
  display: flex;
  align-items: center;
  width: fit-content;
  padding: 5px 7px;
  border: 1px solid #d6d9dc;
  border-radius: 6px;
  cursor: pointer;
  outline: none;
  color: #667085;
  /* margin-bottom: 10px; */
`;

//category
export const Category = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  height: fit-content;
  width: 200px;
  div {
    width: 200px;
    color: #c07f00;
    font-size: 20px;
    display: flex;
    justify-content: flex-end;
  }
`;

//재료
export const IngredientWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  height: fit-content;
  align-items: center;
  margin: 5px 0;
  align-content: center;
  height: fit-content;

  .plus {
    border: 1px dashed black;
    padding: 3px 5px;
    border-radius: 5px;
    background-color: #f7e1ae;
    margin: 10px 15px;
  }
`;

export const TagWrapper = styled.div`
  position: relative;
  width: 150px;
  height: 30px;
  /* border: 1px solid blue; */

  input {
    width: 130px;
    position: absolute;
    top: 6px;
    right: 5px;
    border: 1px solid #617a55;
    border-radius: 3px;
    padding: 3px 7px;
    background-color: #f7e1ae;
    &:focus {
      border: 1px solid red;
      background-color: #f7e1ae;
    }
  }
  button {
    position: absolute;
    top: 8px;
    right: 15px;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    color: #617a55;
    &:hover {
      color: red;
    }
  }
`;


//레시피
export const recipeWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;

  .index {
    padding: 5px 10px;
    background-color: #f7e1ae;
    margin-right: 5px;
    border-radius: 50%;
    color: #617a55;
    font-weight: 700;
  }

  .content {
    color: #c07f00;
    font-size: 20px;
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  border: 1px solid #d6d9dc;
  border-radius: 6px;
  padding-right: 10px;
  /* margin: 1vh 0; */
  height: 25px;
`;

export const AnswerInput = styled.input`
  padding: 3px 30px 3px 7px;
  color: #667085;
  width: 100%;
  border: none;
  border-radius: 6px;
  outline: none;
`;

export const PlusInput = styled.div`
  display: flex;
  justify-content: center;
  cursor: pointer;
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    font-weight: 800;
    background-color: #f7e1ae;
    color: #667085;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    &:hover {
      background-color: #617a55;
      color: #f7e1ae;
    }
  }
`;

export const DeleteInput = styled.div`
  cursor: pointer;
`; 

// 버튼
export const Btns = styled.div`
  display: flex;
  margin: 2vh 0;
  justify-content: center;
`;
export const Cancle = styled.div`
  width: 10vw;
  border: 1px solid #617a55;
  color: #617a55;
  background-color: white;
  border-radius: 12px;
  padding: 1.3vh 1.4vw;
  margin-right: 1vw;
  cursor: pointer;
  white-space: nowrap;
  text-decoration: none;
  display: flex;
  justify-content: center;
  font-size: 0.9rem;
`;
export const Submit = styled.button`
  width: 10vw;
  background-color: #617a55;
  color: white;
  border: none;
  border-radius: 12px;
  padding: 1.3vh 1.4vw;
  cursor: pointer;
  white-space: nowrap;
  font-size: 0.9rem;
`;

// 참고링크
export const LinkInput = styled.input`
  border: 1px solid #d6d9dc;
  border-radius: 6px;
  padding: 5px 10px;
  width: 50vw;
`;

export const LinkShow = styled.div`
  color: #f99b7d;
  text-decoration: none;
  cursor: pointer;
  font-weight: 800;

  &:hover {
    color: #b04759;
  }
`;