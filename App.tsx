import React, {useState} from 'react';
import {View} from 'react-native';
import {AnimatedBegin} from './src/Components/Animated';
import {Pan} from './src/Components/Pan';
import {Fade} from './src/Components/Fade';

const App = () => {
  return (
    <View style={{flex: 1}}>
      {/* <AnimatedBegin /> */}
      <Fade />
    </View>
  );
};

export default App;
