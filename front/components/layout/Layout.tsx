import React, { useState, useCallback } from "react";
import {
  SmileOutlined,
  RestOutlined,
  UserOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu } from 'antd';
import * as style from '../../styles/layoutStyle';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { logoutRequestAction } from '../../reducers/user';

const { Sider } = Layout;

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

const AppLayout = ({ children }: PropTypes) => {
  const dispatch = useDispatch();
  const { me, logOutLoading } = useSelector((state:any)=> state.user);
  
  const [collapsed, setCollapsed] = useState(false);

  const [current, setCurrent] = useState("한식");
  
  const onMenu: MenuProps["onClick"] = (e) =>{
    setCurrent(e.key);
  }

  const items: MenuItem[] = [
    getItem(me ? <Link href="/profile">회원정보</Link> : <Link href="/login">로그인&nbsp;/&nbsp;회원가입</Link>, '1', <UserOutlined />),
    getItem(<Link href="/recipe/korea">한식</Link>, '2', <SmileOutlined />),
    getItem(<Link href="/recipe/china">중식</Link>, '3', <SmileOutlined />),
    getItem(<Link href="/recipe/western">양식</Link>, '4', <SmileOutlined />),
    getItem(<Link href="/recipe/dessert">디저트</Link>, '5', <RestOutlined />),
    getItem(<Link href="/recipe/diet">다이어트</Link>, '6', <SmileOutlined />),
  ];

  const onLogOut = useCallback(()=>{
    dispatch(logoutRequestAction());
  },[])

  return(
    <style.Container>
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)} theme="light" >
        <div className="demo-logo-vertical" />
        <Menu theme="light"  defaultSelectedKeys={['2']} mode="inline" items={items} onClick={onMenu} />
      </Sider>
      <Layout>
        <style.Head>
          {/* <div>{me.nickname}님</div> */}
          <style.LogoutBtn>
            {me && <div onClick={onLogOut}>로그아웃</div>}
          </style.LogoutBtn>
          <style.Title href="/">나만의 레시피</style.Title>
          <div className="searchInput">
            <style.SearchInput />
          </div>
        </style.Head>
        <style.ContentContainer>
          <style.SubTab>
            <Breadcrumb>
              <Breadcrumb.Item>Recipe</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <Link href="/create">
              <style.createBtn>작성하기</style.createBtn>
            </Link>
          </style.SubTab>
          <div className="children">
            {children}
          </div>
        </style.ContentContainer>
      </Layout>
    </style.Container>
  )
}

export default AppLayout;