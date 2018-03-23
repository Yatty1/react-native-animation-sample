import React from 'react';
import { View, StyleSheet, Image, Animated, Easing } from 'react-native';


export default class SpringAnimation extends React.Component {
  constructor() {
    super();
    this.value = new Animated.Value(0)
  }
  componentDidMount() {
    this.spin();
  }

  spin(easing) {
    this.value.setValue(0)
    Animated.spring(this.value, {
      toValue: 1,
      friction: 1
    }).start();
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
        <Animated.View
          style={{
            width: 80,
            height: 80,
            marginVertical: 10,
            backgroundColor: '#dc86ed',
            transform: [{ scale: this.value}]
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
