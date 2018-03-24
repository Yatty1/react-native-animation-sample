import React from 'react';
import {
  View,
  StyleSheet,
  Animated,
  Easing
} from 'react-native';

export default class BarIndicator extends React.Component {
  constructor() {
    super();
    this.state = {
      value: new Animated.Value(0),
      isRight: false
    }
  }

  componentDidMount() {
    this.animate();
  }

  animate() {
    Animated.timing(this.state.value, {
      toValue: this.state.isRight ? 0 : 1,
      delay: 80,
      duration: 1200,
      easing: Easing.easeInOut
    }).start(() => {
      this.setState({ isRight: !this.state.isRight });
      this.animate();
    });
  }
  render() {
    const marginLeft = this.state.value.interpolate({
      inputRange: [0, 1],
      outputRange: [-200, 200]
    })
    const width = this.state.value.interpolate({
      inputRange: [0, 0.5, 1],
      outputRange: [10, 100, 10]
    })
    return (
      <View style={styles.container}>
        <Animated.View
          style={{
            height: 5,
            width,
            borderRadius: 2,
            backgroundColor: '#1c798a',
            marginLeft
          }}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
