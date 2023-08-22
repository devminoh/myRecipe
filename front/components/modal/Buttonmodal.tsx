import React, { useMemo } from 'react';
import * as style from '../../styles/modalStyle';

interface propTypes {
  setOpenModal: React.Dispatch<React.SetStateAction<boolean>>;
  text: string;
  confirmFunc: Function;
}
const ButtonModal = ({ setOpenModal, text, confirmFunc }: propTypes) => {
  const textContainer = useMemo(() => {
    return { display: 'flex', margin: 'auto' };
  }, []);
  const handleModal = () => {
    setOpenModal((prev: any) => !prev);
  };
  const handleEvent = (e: any) => {
    e.stopPropagation();
  };
  const onClickButton = (e: any) => {
    if (e.target.id === 'confirm') {
      confirmFunc();
    } else {
      console.log(e.target.id);
    }
    setOpenModal((prev: any) => !prev);
  };
  return (
    <style.ModalBackground onClick={handleModal}>
      <style.ModalContainer onClick={handleEvent}>
        <div style={textContainer}>
          <style.ModalText>{text}</style.ModalText>
        </div>
        <style.ModalButtonContainer>
          <style.ModalLeftButton id="cancel" onClick={onClickButton}>
            취소
          </style.ModalLeftButton>
          <style.ModalRightButton id="confirm" onClick={onClickButton}>
            확인
          </style.ModalRightButton>
        </style.ModalButtonContainer>
      </style.ModalContainer>
    </style.ModalBackground>
  );
};

export default ButtonModal;
