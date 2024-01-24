import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View, useColorScheme } from 'react-native';
import LottieView from 'lottie-react-native';
import { useEffect, useRef, useState } from 'react';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export default function App() {
  const helloRef = useRef(null);
  const barRef = useRef(null);
  const [barr, setBar] = useState(false);
  useEffect(() => {
    
  },[])

  const sayHello = () => {
    helloRef?.current?.play();

    setTimeout(() => {
      if (barr) {
        barRef?.current?.reset();
      }else{
      barRef?.current?.play();
      }
    }, 500); 
  };


  return (
    <View style={styles.container}>
      <Pressable style={styles.welcome} onPress={sayHello}>
        <View style={styles.welcome}>
          <LottieView ref={helloRef} style={{ flex: 1 }} loop={false} source={require('./assets/welcome.json')} />
        </View>
      </Pressable>

      <View>
        <LottieView ref={barRef} style={styles.bar} source={require('./assets/bar.json')} loop={false} />
      </View>

      <Text style={styles.text}>React Native Lottie Animations!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingVertical: 100,
  },
  text: {
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    textTransform: 'uppercase'
  },
  welcome: {
    height: 400,
    aspectRatio: 1,
  },
  bar: {
    height: 400,
    width: 200,
    aspectRatio: 1,
  },
});
