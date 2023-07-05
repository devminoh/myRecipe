import React, { useRef } from "react";
import * as style from '../../styles/createStyle';
import { TreeSelect } from 'antd';


export function Category({ field }: any){

  const treeData = [
  {
    title: '한식',
    value: '한식',
    children: [
      {
        title: '밥',
        value: '밥',
      },
      {
        title: '국',
        value: '국',
      },
      {
        title: '면',
        value: '면',
      },
      {
        title: '기타',
        value: '기타',
      },
    ],
  },
  {
    title: '중식',
    value: '중식',
  },
  {
    title: '양식',
    value: '양식',
  },
  {
    title: '디저트',
    value: '디저트',
    children: [
      {
        title: '구움과자',
        value: '구움과자',
      },
      {
        title: '빵',
        value: '빵',
      },
      {
        title: '케이크',
        value: '케이크',
      },
    ],
  },
  {
    title: '다이어트식',
    value: '다이어트식',
  },
  ];

  return (
    <>
      <TreeSelect
          style={{ width: '100%' }}
          value={field.category}
          dropdownStyle={{ maxHeight: 400, overflow: 'auto' }}
          treeData={treeData}
          placeholder="Please select"
          treeDefaultExpandAll
          onChange={field.onChange}
        />
    </>
  )
}