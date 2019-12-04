import React, { Component } from 'react';
import { connect } from 'react-redux';
import { AppRegistry, Image } from 'react-native';

class MyPhoto extends Component {
  render() {
    const { animals } = this.props;
    let uri = animals.current.uri;
    return (
      <Image
        source={{ uri }}
        style={{ flex: 1, height: undefined, width: undefined }}
      />
    );
  }
}

AppRegistry.registerComponent('MyPhoto', () => MyPhoto);

const mapStateToProps = state => {
  const { animals } = state;
  return { animals };
};

export default connect(mapStateToProps)(MyPhoto);
