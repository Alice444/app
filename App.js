import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, BackHandler, Alert } from 'react-native';
import { WebView } from "react-native-webview";
import React, { useEffect } from "react";
import {
  AdMobBanner,
  AdMobInterstitial,
} from 'expo-ads-admob';

export default function App() {
	
	 useEffect(() => {
    const backAction = () => {
      Alert.alert("Alerta!", "Deseja mesmo Sair?", [
        {
          text: "Ficar",
          onPress: () => null,
          style: "cancel",
        },
        { text: "Sair", onPress: () => BackHandler.exitApp() },
      ]);
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();
  }, []);
	
  return (
    <View style={styles.container}>
      
	  <AdMobBanner
        bannerSize="fullBanner"
        adUnitID="ca-app-pub-3940256099942544/6300978111" 
        servePersonalizedAds 
        onDidFailToReceiveAdWithError={this.bannerError} />
	  
      <StatusBar hidden={true} />
    </View>
  );
  
  return (
    <WebView
	StatusBar={false}
    javaScriptEnabled={true}
    scrollEnabled={false}
    allowsFullscreenVideo={true}
	source={{ uri: "https://youtube.com" }} style={{ marginTop: 0 }} 
	
	/>
  );
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ff0000',
    
  },
});
