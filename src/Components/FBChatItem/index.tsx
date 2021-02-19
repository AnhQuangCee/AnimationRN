import React, {useRef, useState} from 'react';
import {View, Image, SafeAreaView, StyleSheet} from 'react-native';
import Animated from 'react-native-reanimated'
import Icon from 'react-native-vector-icons/FontAwesome';

export const FBChatItem = () => {
  const scroll_y = useState(new Animated.Value(0))[0];

  const diff_clamp_scroll_y = Animated.diffClamp(scroll_y, 0, 50);
  const header_height = Animated.interpolate(diff_clamp_scroll_y,{
    inputRange: [0, 50],
    outputRange: [50, 0],
  });
  const header_translate_y = Animated.interpolate(diff_clamp_scroll_y,{
    inputRange: [0, 50],
    outputRange: [0, -50],
  });
  const header_opacity = Animated.interpolate(diff_clamp_scroll_y,{
    inputRange: [0, 1],
    outputRange: [1, 0],
  });

  return (
    <SafeAreaView style={{flex: 1}}>
      
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  fake_icon_box: {
    backgroundColor: '#e4e6eb',
    width: 40,
    height: 40,
    borderRadius: 40,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  scroll_view: {
    flex: 1,
  },
  fake_post: {
    height: 250,
    marginHorizontal: 16,
    marginTop: 16,
    borderRadius: 8,
  },
});
