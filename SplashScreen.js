// SplashScreen.js
import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const SplashScreen = () => {
  useEffect(() => {
    // Hide the splash screen after a delay (adjust as needed)
    setTimeout(() => {
      // Replace 'yourAppName' with the actual name of your app
      SplashScreen.hide();
    }, 2000); // 2000 milliseconds (2 seconds) delay in this example
  }, []);

  return (
    <View style={styles.container}>
      {/* Add your splash screen content here */}
      <Image source={require('./assets/splash_logo.png')} style={styles.logo} />
      <Text style={styles.text}>Loading...</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  text: {
    fontSize: 18,
    marginTop: 10,
  },
});

export default SplashScreen;
