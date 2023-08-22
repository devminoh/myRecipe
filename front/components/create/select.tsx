import React from "react";
import * as style from '../../styles/createStyle';


export function ServeSelect({ register, options, name, ...rest }:any) {
  return (
    <style.Select {...register(name)} {...rest}>
      {options.map((value:number) => (
        <option key={value} value={value}>
          {value}
        </option>
      ))}
    </style.Select>
  );
}