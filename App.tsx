import React, {useState} from 'react';
import {View} from 'react-native';
// import {AnimatedBegin} from './src/Components/Animated';
// import {Pan} from './src/Components/Pan';
import {Fade} from './src/Components/Fade';
import {FBHeader} from './src/Components/FBHeader';
import {FBChatItem} from './src/Components/FBChatItem';

const App = () => {
  return (
    <View style={{flex: 1}}>
      <Fade />
    </View>
  );
};

export default App;
