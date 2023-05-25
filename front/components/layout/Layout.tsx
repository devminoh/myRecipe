import React, { useState } from "react";
import {
  SmileOutlined,
  RestOutlined,
  UserOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import * as style from '../../styles/layout';
import Link from 'next/link';


const { Header, Content, Sider } = Layout;

interface PropTypes {
  children: any;
}

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem(<Link href="/login">로그인</Link>, '1', <UserOutlined />),
  getItem('한식', '레시피1', <SmileOutlined />, [
    getItem('면', '2'),
    getItem('국', '3'),
    getItem('밥', '4'),
  ]),
  getItem(<Link href="/recipe/china">중식</Link>, '5', <SmileOutlined />),
  getItem(<Link href="/recipe/western">양식</Link>, '6', <SmileOutlined />),
  getItem('디저트', '레시피2', <RestOutlined />, [
    getItem('구움과자', '7'),
    getItem('빵', '8'),
    getItem('케이크', '9'),
  ]),
  getItem(<Link href="/recipe/diet">다이어트</Link>, '10', <SmileOutlined />),
];

const AppLayout = ({ children }: PropTypes) => {
  const [collapsed, setCollapsed] = useState(false);

  const [current, setCurrent] = useState("한식");
  
  const onMenu: MenuProps["onClick"] = (e) =>{
    setCurrent(e.key);
  }

  return(
    <Layout style={{ minHeight: 100 }}>
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)} theme="light" >
        <div className="demo-logo-vertical" />
        <Menu theme="light"  defaultSelectedKeys={['2']} mode="inline" items={items} onClick={onMenu} />
      </Sider>
      <Layout>
        <style.Head>
          <style.Title href="/">나만의 레시피</style.Title>
        </style.Head>
        <style.ContentContainer>
          <style.SubTab>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </style.SubTab>
          <div>
            {children}
          </div>
        </style.ContentContainer>
      </Layout>
    </Layout>
  )
}

export default AppLayout;