import React from 'react';
import {
  Platform,
  StyleSheet,
  View
} from 'react-native';

import BarIndicator from './js/BarIndicator';
import TimingAnimation from './js/TimingAnimation';
import RandomMoving from './js/RandomMoving';
export default class App extends React.Component {
  render() {
    return <RandomMoving/>;
  }
}
