/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
'use strict';

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View
} from 'react-native';

import { Container, Header, Title, Content, Text, H3, Button, Icon, Footer, FooterTab } from 'native-base';

import theme from './themes/base-theme';

export default class App extends Component {

  static title = '<TabBarIOS>';
  static description = 'Tab-based navigation.';
  static displayName = 'TabBarExample';

  static propTypes = {
    openDrawer: React.PropTypes.func,
  };

  constructor(props) {
    super(props);
    this.state = {
      tab1: false,
      tab2: false,
      tab3: true,
      tab4: false,
    };
  }

  toggleTab1() {
    this.setState({
      tab1: true,
      tab2: false,
      tab3: false,
      tab4: false,
    });
  }

  toggleTab2() {
    this.setState({
      tab1: false,
      tab2: true,
      tab3: false,
      tab4: false,
    });
  }

  toggleTab3() {
    this.setState({
      tab1: false,
      tab2: false,
      tab3: true,
      tab4: false,
    });
  }

  toggleTab4() {
    this.setState({
      tab1: false,
      tab2: false,
      tab3: false,
      tab4: true,
    });
  }

  render() {
    return (
      <Container theme={theme} style={styles.container}>

        <Header>
          <Title>Header</Title>
          <Button transparent onPress={this.props.openDrawer}>
            <Icon name="ios-menu" />
          </Button>
        </Header>

        <Content padder>
          <H3>This is content section</H3>
          <Text style={{ marginTop: 10 }}>
            Selected tab is: {this.state.tab1 ? 1 : this.state.tab2 ? 2 : this.state.tab3 ? 3 : 4}
          </Text>
        </Content>

        <Footer >
          <FooterTab>
            <Button active={this.state.tab1} onPress={() => this.toggleTab1()} >
                Apps
              <Icon name="ios-apps-outline" />
            </Button>
            <Button active={this.state.tab2} onPress={() => this.toggleTab2()} >
                Camera
              <Icon name="ios-camera-outline" />
            </Button>
            <Button active={this.state.tab3} onPress={() => this.toggleTab3()} >
                Navigate
              <Icon name="ios-compass" />
            </Button>
            <Button active={this.state.tab4} onPress={() => this.toggleTab4()} >
                Contact
              <Icon name="ios-contact-outline" />
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  tabContent: {
    flex: 1,
    alignItems: 'center',
  },
  tabText: {
    color: 'white',
    margin: 50,
  },
});

