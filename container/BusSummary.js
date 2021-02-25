import React, { Component,useState, useRef } from 'react';
import { ScrollView, Text, View, Animated } from 'react-native';
import { booksData } from './constants/data';

export default  function BusSummary() {
    const [completeScrollBarHeight, setCompleteScrollBarHeight] = useState(1);
    const [visibleScrollBarHeight, setVisibleScrollBarHeight] = useState(0);
  
    const scrollIndicator = useRef(new Animated.Value(0)).current;
  
    const scrollIndicatorSize =
      completeScrollBarHeight > visibleScrollBarHeight
        ? (visibleScrollBarHeight * visibleScrollBarHeight) /
          completeScrollBarHeight
        : visibleScrollBarHeight;
  
    const difference =
      visibleScrollBarHeight > scrollIndicatorSize
        ? visibleScrollBarHeight - scrollIndicatorSize
        : 1;
  
    const scrollIndicatorPosition = Animated.multiply(
      scrollIndicator,
      visibleScrollBarHeight / completeScrollBarHeight
    ).interpolate({
      inputRange: [0, difference],
      outputRange: [0, difference],
      extrapolate: 'clamp'
    });

    return (
      <View style={{ flex: 1, backgroundColor: 'white', paddingTop: 50 }}>
        <View style={{ alignItems: 'center' }}>
          <Text style={{ color: 'black', fontSize: 28, fontWeight: '700' }}>
            行业协会的职能
          </Text>
        </View>
        <View style={{ flex: 3, marginVertical: 20}}>
          <View
            style={{ flex: 1, flexDirection: 'row', paddingHorizontal: 20 , height: '100%',}}
          >
            <ScrollView
              contentContainerStyle={{ paddingRight: 14 }}
              showsVerticalScrollIndicator={false}
              scrollEventThrottle={16}
              onContentSizeChange={height => {
                setCompleteScrollBarHeight(height);
              }}
              onLayout={({
                nativeEvent: {
                  layout: { height }
                }
              }) => {
                setVisibleScrollBarHeight(height);
              }}
              onScroll={Animated.event(
                [{ nativeEvent: { contentOffset: { y: scrollIndicator } } }],
                { useNativeDriver: false }
              )}
            >
              <Text
                style={{
                  fontSize: 22,
                  color: 'black',
                  fontWeight: '600',
                  marginBottom: 12
                }}
              >
                {booksData.title}
              </Text>
              <Text
                style={{
                  fontSize: 18,
                  color: 'black'
                }}
              >
                {booksData.description}
              </Text>
            </ScrollView>
          </View>
        </View>
      </View>
  );
}