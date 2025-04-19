import React, { useState } from 'react';
import { StyleSheet, Text, View, Animated } from 'react-native';
import {
  TapGestureHandler,
  LongPressGestureHandler,
  PanGestureHandler,
  FlingGestureHandler,
  PinchGestureHandler,
  State,
  Directions,
} from 'react-native-gesture-handler';
import { useTaskContext } from '../../context/TaskProvider';

export function Game() {
  const [scale, setScale] = useState(new Animated.Value(1));
  const [position] = useState(new Animated.ValueXY({ x: 0, y: 0 }));
  const [singleTapCount, setSingleTapCount] = useState(0);
  const [doubleTapCount, setDoubleTapCount] = useState(0);
  const [isDragged, setIsDragged] = useState(false);
  const [swipeRight, setSwipeRight] = useState(false);
  const [swipeLeft, setSwipeLeft] = useState(false);
  const [pinched, setPinched] = useState(false);

  const { score, completeTask } = useTaskContext();

  const handleSingleTap = () => {
    setSingleTapCount((prev) => {
      const newCount = prev + 1;
      if (newCount >= 10) completeTask('1');
      return newCount;
    });
  };

  const handleDoubleTap = () => {
    setDoubleTapCount((prev) => {
      const newCount = prev + 1;
      if (newCount >= 5) completeTask('2');
      return newCount;
    });
  };

  const handleLongPress = () => {
    completeTask('3');
  };

  const handlePan = Animated.event(
    [{ nativeEvent: { translationX: position.x, translationY: position.y } }],
    {
      useNativeDriver: false,
      listener: () => {
        if (!isDragged) {
          setIsDragged(true);
          completeTask('4');
        }
      },
    }
  );

  const handleFlingRight = () => {
    if (!swipeRight) {
      setSwipeRight(true);
      completeTask('5'); 
    }
  };

  const handleFlingLeft = () => {
    if (!swipeLeft) {
      setSwipeLeft(true);
      completeTask('6'); 
    }
  };

  const handlePinch = Animated.event(
    [{ nativeEvent: { scale } }],
    {
      useNativeDriver: false,
      listener: () => {
        if (!pinched) {
          setPinched(true);
          completeTask('7'); 
        }
      },
    }
  );

  React.useEffect(() => {
    if (score >= 100) {
      completeTask('8');
    }
  }, [score, completeTask]);

  return (
    <View style={styles.container}>
      <Text style={styles.score}>Score: {score}</Text>
      <PanGestureHandler onGestureEvent={handlePan}>
        <Animated.View
          style={[
            styles.object,
            { transform: [{ translateX: position.x }, { translateY: position.y }, { scale }] },
          ]}
        >
          <FlingGestureHandler  direction={Directions.RIGHT} onEnded={handleFlingRight}>
            <FlingGestureHandler direction={Directions.LEFT} onEnded={handleFlingLeft}>
              <PinchGestureHandler onGestureEvent={handlePinch}>
                <LongPressGestureHandler onEnded={handleLongPress} minDurationMs={3000}>
                  <TapGestureHandler
                    onGestureEvent={({ nativeEvent }) =>
                      nativeEvent.state === State.ACTIVE && handleSingleTap()
                    }
                    numberOfTaps={1}
                  >
                    <TapGestureHandler
                      onEnded={({ nativeEvent }) =>
                        nativeEvent.state === State.ACTIVE && handleDoubleTap()
                      }
                      numberOfTaps={2}
                    >
                      <Animated.View style={styles.innerObject} />
                    </TapGestureHandler>
                  </TapGestureHandler>
                </LongPressGestureHandler>
              </PinchGestureHandler>
            </FlingGestureHandler>
          </FlingGestureHandler>
        </Animated.View>
      </PanGestureHandler>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  score: {
    fontSize: 24,
    marginBottom: 20,
  },
  object: {
    width: 100,
    height: 100,
    backgroundColor: 'blue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerObject: {
    width: 80,
    height: 80,
    backgroundColor: 'lightblue',
  },
});