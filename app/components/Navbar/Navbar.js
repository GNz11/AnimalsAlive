import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  AppRegistry,
  StyleSheet,
  ScrollView,
  Text,
  View,
  TouchableHighlight,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { getAnimalThunk } from '../../store/AnimalsReducer';

const { height, width } = Dimensions.get('window');
const tileHeight = height * 0.20;
const tileWidth = width * 0.333;

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.onPress = this.onPress.bind(this);
  }

  onPress = name => {
    this.props.getAnimalThunk(name);
  };

  render() {
    const { animals } = this.props;
    const colorsArr = [
      '#F7E3F3',
      '#F7F3E7',
      '#CBDBF3',
      '#dbf3cb',
      '#eff3cb',
      '#f3e3cb',
      '#cdeeb6'
    ];
    return (
      <View style={styles.container}>
        <ScrollView
          horizontal={true}
          bounces={false}
          showsHorizontalScrollIndicator={false}
          style={styles.scrollView}>
          {animals.animals.map(animal => {
            return (
              <TouchableOpacity
                key={animal.name}
                onPress={() => this.onPress(animal.name)}
                style={[
                  styles.v1,
                  {
                    backgroundColor:
                      colorsArr[Math.floor(Math.random() * colorsArr.length)],
                  },
                ]}>
                <View>
                  <Text style={styles.animalText}>{animal.name}</Text>
                </View>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    // alignItems: 'center',
    // justifyContent: 'center',
    // height: 575
  },
  scrollView: {
    height: tileHeight,
    // alignItems: 'center',
    // justifyContent: 'center',
    // height: 575
  },
  v1: {
    flex: 1,
    // backgroundColor: '#F7E3F3',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: tileWidth,
  },
  animalText: {
    fontWeight: 'bold',
    fontSize: 18,
  }
});

const mapStateToProps = state => {
  const { animals } = state;
  return { animals };
};

const mapDispatchToProps = dispatch => {
  return {
    getAnimalThunk: name => dispatch(getAnimalThunk(name)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar);

AppRegistry.registerComponent('Navbar', () => Navbar);
