
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actions } from 'react-native-navigation-redux-helpers';
import { Title, Header, Left, Right, View, Card, CardItem, Body, Container, Content, Icon, Input, Item, Label, Text, Footer, FooterTab, Button, Picker } from 'native-base';
import { Actions } from 'react-native-router-flux';
import TabAtributes from './tabAtributes';
import TabComments from './tabComments';
import TabItems from './tabItems';

import { openDrawer, closeDrawer } from '../../actions/drawer';
import styles from './styles';

const {
  pushRoute,
} = actions;
const datas = [
];

class TaskEdit extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedItem: undefined,
      selected1: 'key1',
      results: {
        items: []
     }
    }
  }
   onValueChange (value: string) {
     this.setState({
         selected1 : value
     });
   }

  static propTypes = {
    openDrawer: React.PropTypes.func,
    pushRoute: React.PropTypes.func,
    navigation: React.PropTypes.shape({
      key: React.PropTypes.string,
    }),
  }

  pushRoute(route) {
    this.props.pushRoute({ key: route, index: 1 }, this.props.navigation.key);
  }

  render() {
    return (
      <Container>
      <Header>
        <Left>
          <Button transparent onPress={() => Actions.pop()}>
            <Icon name="arrow-back" />
          </Button>
        </Left>
        <Body>
          <Title>Add/Edit item</Title>
        </Body>
      </Header>
        <Content style={{ padding: 15 }}>

          <Text note>Item name</Text>
          <View style={{ borderColor: '#CCCCCC', borderWidth: 0.5, marginBottom: 15 }}>
            <Input />
          </View>
          <Text note>Price/item</Text>
          <View style={{ borderColor: '#CCCCCC', borderWidth: 0.5, marginBottom: 15 }}>
            <Input />
          </View>
          <Text note>Shop</Text>
          <View style={{ borderColor: '#CCCCCC', borderWidth: 0.5, marginBottom: 15 }}>
            <Picker
              supportedOrientations={['portrait', 'landscape']}
              iosHeader="Select one"
              mode="dropdown"
              selectedValue={this.state.selected1}
              onValueChange={this.onValueChange.bind(this)}>
              <Item label="Kaufland" value="key0" />
              <Item label="Lidl" value="key1" />
            </Picker>
          </View>
        </Content>
      <Footer>
        <FooterTab>
          <Button iconLeft style={{ flexDirection: 'row', borderColor: 'white', borderWidth: 0.5 }}>
            <Icon active style={{ color: 'white' }} name="md-add" />
            <Text style={{ color: 'white' }} >Cancel</Text>
          </Button>
        </FooterTab>

        <FooterTab>
          <Button iconLeft style={{ flexDirection: 'row', borderColor: 'white', borderWidth: 0.5 }}>
            <Icon active name="md-add" style={{ color: 'white' }} />
            <Text style={{ color: 'white' }} >Save</Text>
          </Button>
        </FooterTab>
    </Footer>
    </Container>
    );
  }
}

function bindAction(dispatch) {
  return {
    openDrawer: () => dispatch(openDrawer()),
    closeDrawer: () => dispatch(closeDrawer()),
    pushRoute: (route, key) => dispatch(pushRoute(route, key)),
  };
}

const mapStateToProps = state => ({
  navigation: state.cardNavigation,
  themeState: state.drawer.themeState,
});

export default connect(mapStateToProps, bindAction)(TaskEdit);
