import React, { Component } from 'react';
import { BackAndroid, StatusBar, NavigationExperimental, Platform, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { StyleProvider, getTheme, variables, Drawer } from 'native-base';
import {
  Container,
  Left,
  Right,
  Body,
  Header,
  Title,
  Content,
  Text,
  H3,
  Button,
  Icon,
  Footer,
  FooterTab
} from 'native-base';
import { actions } from 'react-native-navigation-redux-helpers';
import { Router, Scene } from 'react-native-router-flux';

import theme from './themes/base-theme';

export default class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
      tab1: false,
      tab2: false,
      tab3: true,
      tab4: false,
      tab5: false,
    };
  }

  toggleTab1() {
    this.setState({
      tab1: true,
      tab2: false,
      tab3: false,
      tab4: false,
      tab5: false,
    });
  }

  toggleTab2() {
    this.setState({
      tab1: false,
      tab2: true,
      tab3: false,
      tab4: false,
      tab5: false,
    });
  }

  toggleTab3() {
    this.setState({
      tab1: false,
      tab2: false,
      tab3: true,
      tab4: false,
      tab5: false,
    });
  }

  toggleTab4() {
    this.setState({
      tab1: false,
      tab2: false,
      tab3: false,
      tab4: true,
      tab5: false,
    });
  }

  toggleTab5() {
    this.setState({
      tab1: false,
      tab2: false,
      tab3: false,
      tab4: false,
      tab5: true,
    });
  }

  render() {
    return (
      <StyleProvider style={getTheme((this.props.themeState === 'material') ? material : undefined)}>
        <Container>
          <Header>

            <Left/>

            <Body>
            <Title>awake.</Title>
            </Body>

            <Right>
              <Button transparent>
                <Icon name="ios-create"/>
              </Button>
            </Right>
          </Header>

          <Content padder>
            <H3>This is content section</H3>
            <Text style={{ marginTop: 10 }}>
              Selected tab is: {this.state.tab1 ? 1 : this.state.tab2 ? 2 : this.state.tab3 ? 3 : 4}
            </Text>
          </Content>

          <Footer >
            <FooterTab>
              <Button active={this.state.tab1} onPress={() => this.toggleTab1()}>
                <Icon name="md-locate"/>
              </Button>
              <Button active={this.state.tab2} onPress={() => this.toggleTab2()}>
                <Icon name="md-people"/>
              </Button>
              <Button active={this.state.tab3} onPress={() => this.toggleTab3()}>
                <Icon name="md-search"/>
              </Button>
              <Button active={this.state.tab4} onPress={() => this.toggleTab4()}>
                <Icon name="md-pizza"/>
              </Button>
              <Button active={this.state.tab5} onPress={() => this.toggleTab5()}>
                <Icon name="md-mail"/>
              </Button>
            </FooterTab>
          </Footer>
        </Container>
      </StyleProvider>
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
