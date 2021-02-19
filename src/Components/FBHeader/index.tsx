import React, {useRef, useState} from 'react';
import {View, Image, SafeAreaView, StyleSheet} from 'react-native';
import Animated from 'react-native-reanimated'
import Icon from 'react-native-vector-icons/FontAwesome';

export const FBHeader = () => {
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
      <Animated.View
        style={[
          styles.header,
          {
            height: header_height,
            transform: [
              {
                translateY: header_translate_y,
              },
            ],
            opacity: header_opacity,
          },
        ]}>
        <Image
          source={require('../../../assets/images/facebook.png')}
          style={{width: 160, height: 32}}
        />
        <View style={styles.fake_icon_box}>
          <Icon name={'comments'} size={22} color="black" />
        </View>
      </Animated.View>
      <Animated.ScrollView
        style={[styles.scroll_view]}
        showsVerticalScrollIndicator={false}
        bounces={false}
        scrollEventThrottle={5}
        onScroll={Animated.event(
          [
            {
              nativeEvent: {contentOffset: {y: scroll_y}},
            },
          ],
          {useNativeDriver: false},
        )}>
        <View style={[styles.fake_post, {backgroundColor: '#222222'}]} />
        <View style={[styles.fake_post, {backgroundColor: '#333333'}]} />
        <View style={[styles.fake_post, {backgroundColor: '#444444'}]} />
        <View style={[styles.fake_post, {backgroundColor: '#555555'}]} />
        <View style={[styles.fake_post, {backgroundColor: '#666666'}]} />
      </Animated.ScrollView>
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
