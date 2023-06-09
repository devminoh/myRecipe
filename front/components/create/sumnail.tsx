import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import { Button } from "antd";
import React, { useRef, useState, useEffect } from "react";
import { Controller } from "react-hook-form";
import * as style from '../../styles/createStyle';

export const Sumnail = ({ register, imageUrl, setImageUrl, control }:any) => {
  
  // 이미지 업로드
  const sumImgInput = useRef<any>();

  // const [logoLoading, setLogoLoading] = useState(false);
console.log(imageUrl)
  const handleImgBtnClick = (e:any) => {
    e.preventDefault();
    sumImgInput.current.click();
  }

  const handleImgRemoveBtn = ()=>{
    setImageUrl('')
  }

   const onImgChange = async (e:any) => {
    // setLogoLoading(true);
    const formData = new FormData();
    formData.append('image', e.target.files[0]);
    setImageUrl(URL.createObjectURL(e.target.files[0]));
    // setLogoLoading(false);
  }

  // const [imagePreview, setImagePreview] = useState("");
  // const image = watch("image");
  //   useEffect(() => {
  //     if (image && image.length > 0) {
  //       const file = image[0];
  //       setImagePreview(URL.createObjectURL(file));
  //     }
  // }, [image]);

  return (
    <style.SumContainer>
      <Controller 
        control={control}
        name={"image"}
        render={({ field: { value, onChange, ...field } }) => {
              return (
                <input
                  {...field}
                  ref={sumImgInput}
                  value={value?.fileName}
                  onChange={(e: any) => {
                    onChange(e.target.files[0]), setImageUrl(URL.createObjectURL(e.target.files[0]));
                  }}
                  // onChange={onImgChange}
                  type="file"
                  id="picture"
                  accept='image/*'
                  hidden
                />
              );
            }}
      />
        {/* <input
        // {...register("image")}
          id="picture"
          ref={sumImgInput}
          type="file"
          className='imgInput'
          accept='image/*'
          onChange={onImgChange}
          hidden
        /> */}
        {imageUrl ? <div className="afterImg">
            <img src={imageUrl} alt={imageUrl} />
            <div>
              <Button className="deleteImg" onClick={handleImgRemoveBtn}>제거</Button>
            </div>
          </div> : <button onClick={handleImgBtnClick}>
          {/* <div>{logoLoading ? <LoadingOutlined /> : <PlusOutlined />}</div> */}
          <PlusOutlined />
          업로드
        </button>}
      </style.SumContainer>
  )
}