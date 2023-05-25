import styled from 'styled-components';
import { Layout, Breadcrumb } from 'antd';
import Link from 'next/link';

const { Content, Sider } = Layout;

export const Head = styled.div`
  min-height: 10vh;
  padding: 10px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;

  a {
    color: black;
    font-size: 30px;
    font-weight: 700;
    text-decoration: none;
  }
`;

export const Title = styled(Link)`
  display: flex;
  align-items: center;

  :hover {
    color: blue;
  }
`;

export const ContentContainer = styled(Content)`
  margin: 0 16px;

  div{
    padding: 24px;
    min-height: 360px;
    background-color: white;
  }
`;

export const SubTab = styled(Breadcrumb)`
  margin: 16px 0;
`;

export const SideBar = styled(Sider)`
  background-color: white !important;
`;
