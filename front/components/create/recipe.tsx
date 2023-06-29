import React, { useState, useEffect, useRef } from "react";
import { useFieldArray } from "react-hook-form";
import * as style from '../../styles/createStyle';
import type { Prop } from './ingredient';

export function Recipe({ register, name, control }: Prop){
  const { fields, append, remove } = useFieldArray({
    control,
    name: name,
  });

  const addInput = (e: any) => {
    e.preventDefault();
    append({ recipe: '' });
  };

  return(
    <div>
      {fields.map((field, idx) => (
      <style.recipeWrapper key={idx}>
        <div className="index">{idx+1}</div>
        <style.InputWrapper key={field.id}>
          <style.AnswerInput
            key={field.id}
            placeholder="레시피를 입력해주세요."
            {...register(`recipes.${idx}.recipe`, {
              required: true,
            })}
          />
          <style.DeleteInput onClick={()=>remove(idx)}>x</style.DeleteInput>
        </style.InputWrapper>
      </style.recipeWrapper>
    ))}
    <style.PlusInput onClick={addInput}>
      <div>+</div>
    </style.PlusInput>
    </div>
  )
}