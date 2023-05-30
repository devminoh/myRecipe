import styled from 'styled-components';

export const SumContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
export const ContentImg = styled.img`
  margin: 10px 20px 10px 0;
  border-radius: 5px;
  width: 20%;
  height: 20%;
`;
export const UploadDelete = styled.div`
  display: flex;
`;
export const ImgLabel = styled.label`
  display: inline-block;
  font-size: inherit;
  line-height: normal;
  vertical-align: middle;
  cursor: pointer;
  border: 2px solid #e2e6ee;
  padding: 15px 20px;
  border-radius: 5px;
  color: #667085;
`;
export const SumnailUpload = styled.input`
  margin-left: 10px;
  position: absolute;
  width: 0;
  height: 0;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  border: 0;
`;
export const DeleteSumnaeil = styled.button`
  background-color: var(--color-navy);
  color: white;
  width: 55px;
  height: 30px;
  border-radius: 5px;
  cursor: pointer;
`;

//title
export const Title = styled.div`
  font-size: 20px;
  font-weight: 800;
  color: #617a55;
`;

// serve
export const Serve = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  height: 20px;
  div {
    display: flex;
    align-items: center;
  }
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

//재료
export const IngredientWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 5px 0;
  height: 25px;
`;


//레시피
export const recipeWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  height: 30px;
`;

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  border: 1px solid #d6d9dc;
  border-radius: 6px;
  padding-right: 10px;
  margin: 1vh 0;
  height: 25px;
`;

export const AnswerInput = styled.input`
  padding: 5px 30px 5px 7px;
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
    background-color: #d6d9dc;
    color: #667085;
    border-radius: 50%;
    width: 25px;
    height: 25px;
  }
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
  margin-left: 24px;
  padding: 5px 10px;
  width: 50vw;
`;