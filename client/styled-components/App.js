import styled from 'styled-components';

const WrapperApp = styled.div`
  width: 100%;
  height: 64px;
  background: #1b1b1d;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  background: blue
`;

const SearchContainer = styled.div`
  margin-right: 100px;
  border: black;
  background-color: #1b1b1d;
  :hover {
    color: white;
    box-shadow: 5px 5px 3px #1b1b1d;
  }
`;
const SearchInput = styled.input`
  width: 478px;
  height: 36px;
  background-color: #1b1b1d;
  border: none;
  color:  #8c8c8e;
  background-image: url('navbar/img/search-grey.png');
  background-size: 20px 20px;
  background-position: 5% 50%;
  padding-left: 62px;
  background-repeat: no-repeat;
  
  :hover {
    ::placeholder {
      color: white;
    }
    color: white;
    background-image: url('navbar/img/search-white.png');
    background-size: 20px 20px;
    background-position: 5% 50%;
    background-repeat: no-repeat;
    outline: none !important;
  }
  :focus {
    ::placeholder {
      color: white;
    }
    color: white;
    background-image: url('navbar/img/search-white.png');
    background-size: 20px 20px;
    background-position: 5% 50%;
    background-repeat: no-repeat;
    outline: none !important;
  }
`;
const SearchImage = styled.div`
  

`;

const TabsContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
const Tab = styled.button`
  color: white;
  font-size: 13px;
  font-weight: bold;
  padding: 0;
  margin-left: 10px
  margin-right: 10px
  border: none;
  background: none;
  :hover {
    color: #21ce99;
  }
`;

export { WrapperApp, Logo, SearchContainer, SearchInput, SearchImage, TabsContainer, Tab };