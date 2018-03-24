import React from 'react';
import {
  View,
  StyleSheet,
  Animated,
  Easing
} from 'react-native';

export default class CircleIndicator extends React.Component {
  constructor() {
    super();
    this.arr = [0,1,2,3,4,5,6];
    this.animatedValues = this.arr.map(() => {
      return new Animated.Value(0);
    })
    let frame = 80, radius = 100;
    /// translateX
    var inputRange = [], outputRange = [];
    [...Array(frame)].forEach((e, i) => {
        var value = i/frame;
        var move = Math.sin(value * Math.PI * 2) * radius;
        inputRange.push(value);
        outputRange.push(move);
      })
    this.translateX = this.animatedValues.map((value) => {
      return value.interpolate({ inputRange, outputRange });
    })
    /// translateY
    var inputRange = [], outputRange = [];
    [...Array(frame)].forEach((e, i) => {
      var value = i/frame;
      var move = -Math.cos(value * Math.PI * 2) * radius;
      inputRange.push(value);
      outputRange.push(move);
    })
    this.translateY = this.animatedValues.map((value) => {
      return value.interpolate({ inputRange, outputRange });
    })
  }

  componentDidMount() {
    this.animate();
  }

  animate() {
    const animations = this.arr.map((value) => {
      return Animated.timing(this.animatedValues[value], {
        toValue: 1,
        duration: 2000,
        easing: Easing.easeInOut
      })
    });
    Animated.stagger(100, animations).start(() => {
      this.animatedValues.forEach((value) => {
        value.setValue(0);
      })
      this.animate();
    });
  }

  render() {
    const animations = this.arr.map((a, i) => {
      const transform = [{ translateY: this.translateY[i] }, { translateX: this.translateX[i] }];
      return <Animated.View key={i} style={[{
        transform,
        position: 'absolute',
        height: 15,
        width: 15,
        borderRadius: 7.5,
        backgroundColor: '#92e85e'
      }]} />
    })
    return (
      <View style={styles.container}>
        {animations}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
