import React, {lazy, useState} from 'react';
import {View, Text, Animated, TouchableOpacity, PanResponder} from 'react-native';

export const Pan = () => {
  const pan = useState(new Animated.ValueXY())[0];

  const panResponder = useState(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        pan.setOffset({
          x: pan.x._value,
          y: pan.y._value
        });
      },
      onPanResponderMove: (...args) => {
        console.log('Args: ', args)
      },
      onPanResponderRelease: () => {
        pan.flattenOffset();
      }
    })
  ).[0];

  console.log(pan.getLayout())
  return (
    <View style={{flex: 1}}>
        <Animated.View
          // eslint-disable-next-line react-native/no-inline-styles
          style={[{
            width: 100,
            height: 100,
            borderRadius: 100 / 2,
            backgroundColor: 'cyan',
            // transform: [{translateX: opacity}],
          },
          pan.getLayout()  
        ]}
        {...panResponder.panHandlers}
        />
    </View>
  );
};
