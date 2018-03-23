import React from 'react';
import { View, StyleSheet, Image, Animated, Easing } from 'react-native';
//step0?
//step1?
//easing type
// <predefined
//back
//bouce
//ease
//elastic
// <standard
//linear
//quad
//cubic
//The poly function can be used to implement quartic, quintic, and other higher power functions.
// <additional
//bezier
//circle
//sin
//exp
// <used to modify other easing function
//in
//inOut
//out
export default class TimingAnimation extends React.Component {
  constructor() {
    super();
    this.value = new Animated.Value(0)
  }
  componentDidMount() {
    this.spin(Easing.cubic);
  }

  spin(easing) {
    this.value.setValue(0)
    Animated.timing(this.value, {
      toValue: 1,
      duration: 2000,
      easing
    }).start(() => this.spin())
  }
  render() {
    const spin = this.value.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg']
    })
    const movingMargin = this.value.interpolate({
      inputRange: [0, 1],
      outputRange: [-50, 100]
    })
    return (
      <View style={styles.container}>
        <Animated.View
          style={{
            width: 200,
            height: 200,
            justifyContent: 'center',
            alignItems: 'center',
            transform: [{rotate: spin}]
          }}
        >
          <Image source={require('../assets/react-native-icon.png')}/>
        </Animated.View>
        <Animated.View
          style={{
            width: 30,
            height: 20,
            backgroundColor: '#dc86ed',
            marginLeft: movingMargin
          }}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});
