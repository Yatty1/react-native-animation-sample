import React from 'react';
import {
  Platform,
  StyleSheet,
  View
} from 'react-native';

import BarIndicator from './js/BarIndicator';
import TimingAnimation from './js/TimingAnimation';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <BarIndicator/>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});
