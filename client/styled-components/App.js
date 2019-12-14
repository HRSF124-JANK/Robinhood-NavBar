import styled from 'styled-components';

const WrapperApp = styled.div`
  width: 100%;
  height: 64px;
  position:fixed;
  background: ${props => props.backgroundColor};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  margin-left: 50px;
  width: 100px;
  height: 40px;
  background-image: ${props => {
    return props.backgroundColor === 'white' ? `url('navbar/img/robinhood-off-light.png')` : `url('navbar/img/robinhood-off-dark.png')`;
  }};
  background-size: 33px 33px;
  background-position: 5% 50%;
  background-repeat: no-repeat;
  :hover {
    background-image: ${props => {
      return props.backgroundColor === 'white' ? `url('navbar/img/robinhood-on-light.png')` : `url('navbar/img/robinhood-on-dark.png')`;
    }};
    background-size: 33px 33px;
  background-position: 5% 50%;
  background-repeat: no-repeat;
  }
`;

const SearchContainer = styled.div`
  margin-right: 100px;
  border: solid #f4f4f5 1px;
  border-radius: 5px;
  :hover {
    color: white;
    box-shadow: 5px 5px 3px #1b1b1d;
  }
`;
const SearchInput = styled.input`
  width: 478px;
  height: 36px;
  background-color: ${props => props.backgroundColor};
  border: none;
  color:  #f4f4f5;
  background-image: url('navbar/img/search-off-dark.png');
  background-size: 20px 20px;
  background-position: 5% 50%;
  padding-left: 62px;
  background-repeat: no-repeat;
  
  :hover {
    ::placeholder {
      color: ${props => {
        return props.backgroundColor === 'white' ? 'black' : 'white';
      }};
    };
    color: ${props => {
      return props.backgroundColor === 'white' ? 'black' : 'white';
    }};
    background-image: ${props => {
      return props.backgroundColor === 'white' ? `url('navbar/img/search-on-light.png')` : `url('navbar/img/search-on-dark.png')`;
    }};
    background-size: 20px 20px;
    background-position: 5% 50%;
    background-repeat: no-repeat;
  }
  :focus {
    ::placeholder {
      color: ${props => {
        return props.backgroundColor === 'white' ? 'black' : 'white';
      }};
    };
    color: ${props => {
      return props.backgroundColor === 'white' ? 'black' : 'white';
    }};
    background-image: ${props => {
      return props.backgroundColor === 'white' ? `url('navbar/img/search-on-light.png')` : `url('navbar/img/search-on-dark.png')`;
    }};
    background-size: 20px 20px;
    background-position: 5% 50%;
    background-repeat: no-repeat;
  }
`;

const TabsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-right: 35px;
`;
const Tab = styled.button`
  color: ${props => {
    return props.backgroundColor === 'white' ? 'black' : 'white';
  }};
  font-size: 13px;
  font-weight: bold;
  padding: 0;
  margin-left: 15px
  margin-right: 15px
  border: none;
  background: none;
  :hover {
    color: #21ce99;
  }
`;

export { WrapperApp, Logo, SearchContainer, SearchInput, TabsContainer, Tab };