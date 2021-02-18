import React, {useState} from 'react';
import {View, Text, Animated, TouchableOpacity} from 'react-native';

export const AnimatedBegin = () => {
  const opacity = useState(new Animated.Value(0))[0];
  const fadeInBall = () => {
    Animated.timing(opacity, {
      toValue: 100,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };
  const fadeOutBall = () => {
    Animated.timing(opacity, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: true,
    }).start();
  };

  return (
    <View style={{flex: 1}}>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Animated.View
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            width: 100,
            height: 100,
            borderRadius: 100 / 2,
            backgroundColor: 'cyan',
            // opacity,
            transform: [{translateX: opacity}],
          }}
        />
        <TouchableOpacity
          onPress={fadeInBall}
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            width: 100,
            height: 50,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'red',
          }}>
          <Text>Fade ball</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={fadeOutBall}
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            width: 100,
            height: 50,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'violet',
          }}>
          <Text>Fade ball</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
