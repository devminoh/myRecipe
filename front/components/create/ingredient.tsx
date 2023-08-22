import React, { useState, useEffect, useRef } from "react";
import * as style from '../../styles/createStyle';
import { Input, Tag, theme } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { TweenOneGroup } from 'rc-tween-one';
import type { InputRef } from 'antd';
import { useFieldArray } from "react-hook-form";

export interface Prop {
  register: any;
  name: string;
  control: any;
}


export function Ingredient({ register, name, control }: Prop) {
  const { fields, append, remove } = useFieldArray({
    control,
    name: name,
  });

  return (
    <style.IngredientWrapper>
      {
        fields.map((field, idx)=>(
          <style.TagWrapper key={field.id}>
            <input 
            {...register(`${name}.${idx}.name`)}
            />
            <button type="button" onClick={()=> remove(idx)}>
              x
            </button>
          </style.TagWrapper>
        ))
      }
      <button className="plus" type="button" onClick={()=>append({name: ''})}>
        <PlusOutlined />재료추가
      </button>
    </style.IngredientWrapper>
  );
}