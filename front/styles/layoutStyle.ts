import styled from 'styled-components';
import { Layout, Input } from 'antd';
import Link from 'next/link';

const { Content, Sider } = Layout;

export const Container = styled(Layout)`
display: flex;
  height: 100vh;
  /* width: 520px; */
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
    color: #8294c4;
    font-size: 30px;
    font-weight: 700;
    text-decoration: none;
    margin-top: 20px;

    &:hover {
      color: #acb1d6;
    }
  }

  .searchInput {
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

  .children {
    padding: 24px;
    /* min-height: 100px; */
    background-color: white;
  }
`;

export const SubTab = styled.div`
  align-items: center;
  margin: 16px 0;
  display: flex;
  justify-content: space-between;
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

export const LogoutBtn = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 80vw;
  
  div{
    cursor: pointer;
    color: #8294c4;
    font-size: 15px;
    font-weight: 700;
    margin-right: 20px;
    &:hover{
      color: #E76161;
    }
  }
`;

export const createBtn = styled.button`
  background-color: #8294c4;
  padding: 5px 15px;
  color: white;
  border-radius: 3px;
  cursor: pointer;
  &:hover {
    background-color: #acb1d6;
  }
`;