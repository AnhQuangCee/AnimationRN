import React, {useState} from 'react';
import {View, Text, Animated, TouchableOpacity} from 'react-native';

export const Fade = () => {
  const [drawer, setDrawer] = useState(false);
  const opacity = useState(new Animated.Value(0))[0];
  const slideTop = useState(new Animated.Value(100))[0];
  const opacityAvatar = useState(new Animated.Value(0))[0];
  const slideSection = useState(new Animated.Value(50))[0];

  // drawer
  const drawerTransX = useState(new Animated.Value(-200))[0];
  const viewTransX = useState(new Animated.Value(0))[0];

  // scaleBox
  const scaleBox = useState(new Animated.Value(0))[0];

  const fadeInBall = () => {
    Animated.parallel([
      Animated.timing(opacity, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.timing(slideTop, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.timing(slideSection, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.timing(opacityAvatar, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
    ]).start();
  };
  const fadeOutBall = () => {
    Animated.parallel([
      Animated.timing(opacity, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.timing(slideTop, {
        toValue: 100,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.timing(slideSection, {
        toValue: 50,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.timing(opacityAvatar, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const drawerAnimated = Animated.parallel([
    Animated.timing(drawerTransX, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true,
    }),
    Animated.timing(viewTransX, {
      toValue: 200,
      duration: 500,
      useNativeDriver: true,
    }),
  ]);
  const drawerAnimatedOut = Animated.parallel([
    Animated.timing(drawerTransX, {
      toValue: -200,
      duration: 500,
      useNativeDriver: true,
    }),
    Animated.timing(viewTransX, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true,
    }),
  ]);

  const drawerFunc = () => {
    setDrawer(!drawer);
    if (drawer) {
      drawerAnimated.start();
    } else {
      drawerAnimatedOut.start();
    }
  };
// const scaleValue = scaleBox.interpolate({
//       inputRange:[0,100],
//       outputRange:[0,300]
//     })
  const scale = () => {
    Animated.timing(scaleBox,{
      toValue:10,
      duration:1000,
      useNativeDriver:true
    }).start()
  }
  return (
    <>
      <Animated.View
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          flex: 1,
          opacity: 1,
          position: 'absolute',
          top: 0,
          left: 0,
          height: 1000,
          width: 200,
          backgroundColor: 'gray',
          zIndex: 10,
          transform: [
            {
              translateX: drawerTransX,
            },
          ],
        }}
      />
      <Animated.View
        // eslint-disable-next-line react-native/no-inline-styles
        style={{
          flex: 1,
          zIndex: 9,
          transform: [
            {
              translateX: viewTransX,
            },
          ],
        }}>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <TouchableOpacity
            onPress={drawerFunc}
            // eslint-disable-next-line react-native/no-inline-styles
            style={{
              width: 100,
              height: 50,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'orange',
            }}>
            <Text>Drawer</Text>
          </TouchableOpacity>
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
            <Text>Fade In</Text>
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
            <Text>Fade Out</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={scale}
            // eslint-disable-next-line react-native/no-inline-styles
            style={{
              width: 100,
              height: 50,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'blue',
            }}>
            <Text>Fade Out</Text>
          </TouchableOpacity>
        </View>
        <Animated.View style={{height:100, width:100, borderRadius:5, backgroundColor:'blue', marginLeft:150, marginBottom:20, transform:[
          {
            scale:scaleBox
          }
        ] }}/>
        <Animated.View
          // eslint-disable-next-line react-native/no-inline-styles
          style={{
            flex: 1,
            height: 400,
            width: '100%',
            backgroundColor: 'cyan',
            opacity,
            transform: [{translateY: slideTop}],
          }}>
          <Animated.View
            // eslint-disable-next-line react-native/no-inline-styles
            style={{
              height: 50,
              width: 50,
              backgroundColor: 'red',
              marginHorizontal: 20,
              marginTop: 20,
              borderRadius: 25,
              opacity: opacityAvatar,
            }}
          />
          <Animated.View
            // eslint-disable-next-line react-native/no-inline-styles
            style={{
              height: 50,
              width: 300,
              backgroundColor: 'red',
              marginHorizontal: 20,
              marginTop: 20,
              borderRadius: 25,
              transform: [
                {
                  translateY: slideSection,
                },
              ],
            }}
          />
        </Animated.View>
      </Animated.View>
    </>
  );
};
