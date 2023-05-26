import styled from 'styled-components';
import { Layout, Breadcrumb, Input } from 'antd';
import Link from 'next/link';

const { Content, Sider } = Layout;

export const Container = styled(Layout)`
  height: 100vh;
`;

export const Head = styled.div`
  min-height: 10vh;
  padding: 10px;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  a {
    color: #a4d0a4;
    font-size: 30px;
    font-weight: 700;
    text-decoration: none;
    margin-top: 20px;

    &:hover {
      color: #617a55;
    }
  }

  div {
    width: 80vw;
    display: flex;
    justify-content: flex-end;
    margin: 10px 0;
  }
`;

export const Title = styled(Link)`
  display: flex;
  align-items: center;
`;

export const ContentContainer = styled(Content)`
  margin: 0 16px;
  height: 80vh;

  div{
    padding: 24px;
    min-height: 100px;
    background-color: white;
  }
`;

export const SubTab = styled(Breadcrumb)`
  margin: 16px 0;
`;

export const SideBar = styled(Sider)`
  background-color: white !important;
`;

export const SearchInput = styled(Input.Search)`
  vertical-align: middle;
  display: flex;
  width: 300px;
  margin-right: 20px;
`;