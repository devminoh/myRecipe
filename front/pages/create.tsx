import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Input, Tag, theme } from 'antd';
import type { InputRef } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { TweenOneGroup } from 'rc-tween-one';
import * as style from '../styles/createStyle';
import {
  Controller,
  useForm,
  SubmitHandler,
  useFieldArray,
} from 'react-hook-form';
import axios from 'axios';
import { useRouter } from 'next/router';
import ButtonModal from '../components/modal/Buttonmodal';

export interface ingredient {
  ingredient: string;
}

export interface categories {
  category: string;
}

export interface recipes {
  recipe: string;
}

export interface Inputs {
  serve: number;
  categories: categories[];
  ingredients: ingredient[];
  recipes: recipes[];
  link: string;
}

const CreateRecipe = () => {
  const { token } = theme.useToken();
  const [tags, setTags] = useState<string[]>([]);
  const [inputVisible, setInputVisible] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const inputRef = useRef<InputRef>(null);

  const [sumbmitData, setSubmitData] = useState<Inputs>();
  const [openModal, setOpenModal] = useState(false);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { isSubmitting, errors },
  } = useForm<Inputs>({
    mode: 'onChange',
    reValidateMode: 'onChange',
    defaultValues: {
      recipes: [{ recipe: '' }],
    },
  });

  //submit
  const onHandleSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data)
    // axios
    //   .post(`${api}/topics`, sumbmitData, {
    //     headers: {
    //       authorization: `Bearer ${LocalStorage.getItem('accesstoken')}` || `Bearer ${SessionStorage.getItem('accesstoken')}`
    //     }
    //   })
    //   .then((res: AxiosResponse) => {
    //     console.log('요청 성공!', res);
    //     router.push(`/readvote?pid=${res.data.data.topicId}`)
    //   })
    //   .catch((err: AxiosError) => {
    //     console.log('요청 실패!', err.message);
    //   });
  };

  const confirmSubmit: SubmitHandler<Inputs> = (data) =>{
    setSubmitData(data);
    // setOpenModal((prev) => !prev);
  }

  //serve
  const [serve, setServe] = useState<number>(1);

  // 재료
  useEffect(() => {
    if (inputVisible) {
      inputRef.current?.focus();
    }
  }, [inputVisible]);

  const handleClose = (removedTag: string) => {
    const newTags = tags.filter((tag) => tag !== removedTag);
    console.log(newTags);
    setTags(newTags);
  };

  const showInput = () => {
    setInputVisible(true);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleInputConfirm = () => {
    if (inputValue && tags.indexOf(inputValue) === -1) {
      setTags([...tags, inputValue]);
    }
    setInputVisible(false);
    setInputValue('');
  };

  const forMap = (tag: string) => {
    const tagElem = (
      <Tag
        closable
        onClose={(e) => {
          e.preventDefault();
          handleClose(tag);
        }}
      >
        {tag}
      </Tag>
    );
    return (
      <span key={tag} style={{ display: 'inline-block' }}>
        {tagElem}
      </span>
    );
  };

  const tagChild = tags.map(forMap);

  const tagPlusStyle = {
    background: token.colorBgContainer,
    borderStyle: 'dashed',
  };


  //레시피
  const { fields, append, remove } = useFieldArray({
    control,
    name: `recipes`,
  });

  const addInput = (e: any) => {
    e.preventDefault();
    append({ recipe: '' });
  };

  //취소
  //cancle
  const onHandleCancle = () => {
    if (confirm('정말 취소하시겠습니까?')) {
      router.push('/');
    } else {
      console.log();
    }
  };

  return(
  <form  onSubmit={handleSubmit(confirmSubmit)}>
    {/* serve */}
    <style.Serve>
      <style.Select
        defaultValue="1"
        {...register(`serve`, {
          required: '몇인분인가요?',
        })}
      >
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
      </style.Select>
      <div>인분</div>
    </style.Serve>
    <style.Title>재료</style.Title>
    <style.IngredientWrapper>
        <TweenOneGroup
          enter={{
            scale: 0.8,
            opacity: 0,
            type: 'from',
            duration: 100,
          }}
          onEnd={(e) => {
            if (e.type === 'appear' || e.type === 'enter') {
              (e.target as any).style = 'display: inline-block';
            }
          }}
          leave={{ opacity: 0, width: 0, scale: 0, duration: 200 }}
          appear={false}
        >
          {tagChild}
        </TweenOneGroup>
        {inputVisible ? (
          <Input
            ref={inputRef}
            type="text"
            size="small"
            style={{ width: 78 }}
            value={inputValue}
            onChange={handleInputChange}
            onBlur={handleInputConfirm}
            onPressEnter={handleInputConfirm}
          />
        ) : (
          <Tag onClick={showInput} style={tagPlusStyle}>
            <PlusOutlined /> 재료 추가
          </Tag>
        )}
    </style.IngredientWrapper>
    <style.Title>레시피</style.Title>
    {fields.map((field, idx) => (
      <style.recipeWrapper>
        <div>{idx+1}</div>
        <style.InputWrapper key={field.id}>
          <style.AnswerInput
            key={field.id}
            placeholder="레시피를 입력해주세요."
            {...register(`recipes.${idx}.recipe`, {
              required: true,
            })}
          />
          {/* <S.DeleteInput onClick={()=>deleteInput}>x</S.DeleteInput> */}
        </style.InputWrapper>
      </style.recipeWrapper>
    ))}
    <style.PlusInput onClick={addInput}>
      <div>+</div>
    </style.PlusInput>
    <style.Title>
      참고 링크
    </style.Title>
    <style.LinkInput 
      {...register(`link`, {
        required: false,
      })} />
    {/* 버튼 */}
    <style.Btns>
      <style.Cancle onClick={onHandleCancle}>취소하기</style.Cancle>
      <style.Submit id="post" type="submit" disabled={isSubmitting}>
        등록하기
      </style.Submit>
    </style.Btns>
    <>
      {openModal ? (
        <ButtonModal
          text={'등록할까요?'}
          confirmFunc={onHandleSubmit}
          setOpenModal={setOpenModal}
        />
      ) : null}
    </>
    {/* <style.SumContainer>
      {contentFileImage && (
        <style.ContentImg alt="detailImg" src={contentFileImage} />
      )}
      <style.UploadDelete>
        <style.ImgLabel htmlFor="detailImage">
          <div className="noImg">{contentsImg === '' ? '+' : ''}</div>
        </style.ImgLabel>
        <style.SumnailUpload
          name="detailImg"
          id="detailImage"
          type="file"
          accept="image/*"
          onChange={changeContentImg}
        />
        {contentsImg === '' ? (
          ''
        ) : (
          <style.DeleteSumnaeil onClick={(e:any) => deletedetailFileImage(e)}>
            삭제
          </style.DeleteSumnaeil>
        )}
      </style.UploadDelete>
    </style.SumContainer> */}
  </form>
  )
}

export default CreateRecipe;