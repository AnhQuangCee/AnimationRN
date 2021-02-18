import React, {useState} from 'react';
import {View} from 'react-native';
import {AnimatedBegin} from './src/Components/Animated'
import {Pan} from './src/Components/Pan'

const App = () => {
  return (
    <View>
      {/* <AnimatedBegin /> */}
      <Pan />
    </View>
  );
};

export default App;
