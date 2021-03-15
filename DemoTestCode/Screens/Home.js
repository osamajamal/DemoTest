import React, {Component} from 'react';

import {View, Text, Button} from 'react-native';
import {connect} from 'react-redux';
import {namewish, apiresquestdispatch} from '../Store/Actions/ApiAction';

// import { Container } from './styles';

class Paractice extends Component {
  state = {
    previousState: [],
    alluser: [],
    newState: [],
    isSubmitted: false,
  };
  componentDidMount() {
    this.props.getalldata();
    // console.log(this.props.userdeatils);
    this.setState({alluser: this.props.userdeatils});
  }
  componentDidUpdate() {
    // console.log(this.props.userdeatils);
    // if (this.state.previousState && this.state.previousState.length == 0) {
    //   this.setState({previousState: this.props.userdeatils});
    // } else {
    //   if (this.state.isSubmitted) {
    //     let isSame =
    //       JSON.stringify(this.state.previousState) ==
    //       JSON.stringify(this.state.userdeatils);
    //     console.log(isSame);
    //     if (isSame === false) {
    //       this.setState({
    //         previousState: this.props.userdeatils,
    //         isSubmitted: true,
    //       });
    //     }
    //   }
    // }
  }

  render() {
    const {name, city, age} = this.state;
    const {userdeatils} = this.props;
    console.log(userdeatils);
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Button
          title="Drawer"
          onPress={() => {
            this.props.navigation.toggleDrawer();
            // this.props.changename('osamama', [0, 122, 56466]);
          }}></Button>
      </View>
    );
  }
}
const mapstatetoprops = (state) => {
  // console.log(state);
  return {
    name: state.name,
    wish: state.wish,
    userdeatils: state.userdeatils,
    loader: state.loader,
  };
};
const mapdispatchtoprops = (dispatch) => {
  return {
    changename: (name, wisharray) => {
      const data = {
        name: name,
        wisharray: wisharray,
      };
      dispatch(namewish(data));
    },
    getalldata: () => {
      dispatch(apiresquestdispatch());
    },
  };
};
export default connect(mapstatetoprops, mapdispatchtoprops)(Paractice);
