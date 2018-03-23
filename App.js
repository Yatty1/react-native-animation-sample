import React from 'react';
import {
  Platform,
  StyleSheet,
  View
} from 'react-native';

import TimingAnimation from './js/TimingAnimation';
import SpringAnimation from './js/SpringAnimation';
import SequenceSample from './js/SequenceSample';
import StaggerSample from './js/StaggerSample';
import Sample from './js/Sample';

export default class App extends React.Component {
  render() {
    return (
      <Sample/>
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
