import React from 'react';
import { WrapperApp, Logo, SearchContainer, SearchInput, TabsContainer, Tab } from '../styled-components/App.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      backgroundColor: 'white'
    }
  }

  componentDidMount() {
    const d = new Date();
		const totalMinutes = (d.getHours() * 60) + d.getMinutes();
		let background = '';
		if (totalMinutes < 360 || totalMinutes >= 900) {
			background = '#1b1b1d';
		} else {
			background = 'white';
    }
    console.log(background);
		this.setState({
			backgroundColor: background,
		})
  }

  render() {
    return (
      <WrapperApp backgroundColor={this.state.backgroundColor}>
        <Logo backgroundColor={this.state.backgroundColor}></Logo >
        <SearchContainer>
          <SearchInput type="text" placeholder="Search" backgroundColor={this.state.backgroundColor}></SearchInput>
        </SearchContainer>
        <TabsContainer>
          <Tab backgroundColor={this.state.backgroundColor}>Free Stock</Tab>
          <Tab backgroundColor={this.state.backgroundColor}>Portfolio</Tab>
          <Tab backgroundColor={this.state.backgroundColor}>Cash</Tab>
          <Tab backgroundColor={this.state.backgroundColor}>Messages</Tab>
          <Tab backgroundColor={this.state.backgroundColor}>Account</Tab>
        </TabsContainer>
      </WrapperApp>
    )
  }
}

export default App;