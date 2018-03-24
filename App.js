import React from 'react';
import {
  Platform,
  StyleSheet,
  View
} from 'react-native';

import BarIndicator from './js/BarIndicator';
import RandomMoving from './js/RandomMoving';
import CircleIndicator from './js/CircleIndicator';

export default class App extends React.Component {
  render() {
    return <CircleIndicator/>;
  }
}
