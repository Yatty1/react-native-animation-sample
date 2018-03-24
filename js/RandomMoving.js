import React from 'react';
import {
  NativeModules,
  View,
  StyleSheet,
  LayoutAnimation,
  TouchableOpacity,
  Text
} from 'react-native';

const { UIManager } = NativeModules;

// to get this to work on Android
UIManager.setLayoutAnimationEnabledExperimental &&
  UIManager.setLayoutAnimationEnabledExperimental(true);

//layout animation options
//linear
//easeInOut
//spring
export default class RandomMoving extends React.Component {
  constructor() {
    super();
    this.state = {
      left: 150,
      top: 150
    }
  }
  _onPress = () => {
    const left = Math.floor((Math.random() * 250) + 1);
    const top = Math.floor((Math.random() * 500) + 1);

    LayoutAnimation.spring()
    this.setState({ left, top });
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.button}
          onPress={this._onPress}
        >
          <Text style={{ color: '#fff' }}> Press Me! </Text>
        </TouchableOpacity>
        <View style={{
            position: 'absolute',
            height: 40,
            width: 40,
            backgroundColor: "#d55554",
            top: this.state.top,
            left: this.state.left,
          }}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d5f2ff',
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    height: 40,
    width: 150,
    borderRadius: 5,
    backgroundColor: '#4cd162',
    justifyContent: 'center',
    alignItems: 'center'
  }
})
