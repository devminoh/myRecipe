import React, { useState } from 'react';
import * as style from '../styles/createStyle';
import {
  useForm,
  SubmitHandler,
  UseFormRegister,
  Path,
  useController
} from 'react-hook-form';
import axios from 'axios';
import { useRouter } from 'next/router';
import ButtonModal from '../components/modal/Buttonmodal';

import { ServeSelect } from '../components/create/select';
import { Category } from '../components/create/category';
import { Ingredient } from '../components/create/ingredient';
import { Recipe } from '../components/create/recipe';
export interface ingredient {
  name: string;
}

export interface recipes {
  recipe: string;
}

export interface Inputs {
  serve: number;
  category: string;
  ingredients: ingredient[];
  recipes: recipes[];
  link?: string;
}

export type FormInputProps<TFormValues> = {
  name: Path<TFormValues>;
  register: UseFormRegister<TFormValues>;
};

const CreateRecipe = () => {
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
      serve: 1,
      category: '',
      ingredients: [{name: ''}],
      recipes: [{ recipe: '' }],
      link: ''
    },
  });
  console.log(sumbmitData)
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
    console.log(data)
    setOpenModal((prev) => !prev);
  }
  
  //serve
  const serveOption = [1, 2, 3, 4, 5, 6];
  
  // 카테고리
  const { field } = useController({
    name: 'category',
    control: control
  })

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
  <form onSubmit={handleSubmit(confirmSubmit)}>
    {/* serve */}
    <style.Serve>
      <ServeSelect register={register} options={serveOption} name={'serve'} />
      <div>인분</div>
    </style.Serve>
    {/* 카테고리 */}
    <style.Category>
      <div>카테고리 :</div>
      <Category field={field} />
    </style.Category>
    {/* 재료추가 */}
    <style.Title>재료</style.Title>
    <Ingredient 
      register={register}
      name={'ingredients'}
      control={control}
      />
    {/* 레시피 */}
    <style.Title>레시피</style.Title>
    <Recipe 
      register={register}
      name={'recipes'}
      control={control}
    />
    {/* 링크 */}
    <style.Title>
      참고 링크
    </style.Title>
    <style.LinkInput 
      id="link"
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
    {/* <>
      {openModal ? (
        <ButtonModal
          text={'등록할까요?'}
          confirmFunc={onHandleSubmit}
          setOpenModal={setOpenModal}
        />
      ) : null}
    </> */}
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