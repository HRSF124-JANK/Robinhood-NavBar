import React from 'react';
import { WrapperApp, Logo, SearchContainer, SearchInput, SearchImage, TabsContainer, Tab } from '../styled-components/App.js';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <WrapperApp>
        Logo
        <Logo/>
        <SearchContainer>
          <SearchImage></SearchImage>
          <SearchInput type="text" placeholder="Search"></SearchInput>
        </SearchContainer>
        <TabsContainer>
          <Tab>Free Stock</Tab>
          <Tab>Portfolio</Tab>
          <Tab>Cash</Tab>
          <Tab>Messages</Tab>
          <Tab>Account</Tab>
        </TabsContainer>
      </WrapperApp>
    )
  }
}

export default App;