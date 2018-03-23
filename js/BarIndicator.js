import React from 'react';
import {
  View,
  Animated,
  Easing
} from 'react-native';

export default class BarIndicator extends React.Component {
  constructor() {
    super();
    this.value = new Animated.Value(0);
  }

  componentDidMount() {
    this.animate();
  }

  animate() {
    this.value.setValue(0);
    Animated.timing(this.value, {
      toValue: 1,
      duration: 1300,
      easing: Easing.linear
    }).start(() => this.animate());
  }
  render() {
    const marginLeft = this.value.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [-100, 100, -100]
    })
    return (
      <Animated.View
        style={{
          height: 5,
          width: 50,
          borderRadius: 2,
          backgroundColor: '#1c798a',
          marginLeft
        }}/>
    );
  }
}
