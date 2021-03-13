import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, Alert } from 'react-native';
import AppLoading from 'expo-app-loading';
import Loading from './components/Loading'
import * as Font from 'expo-font';
import _NavigationService from './src/NavigationService';

export default class App extends React.Component {
  state = {
    fontsLoaded: false,
  };

  async loadFonts() {
    enum FontDisplay {
      AUTO = 'auto',
      BLOCK = 'block',
      SWAP = 'swap',
      FALLBACK = 'fallback',
      OPTIONAL = 'optional',
    }
    await Font.loadAsync({
    DoHyeon: {
        uri: require('./assets/fonts/DOHYEON.ttf'),
        display: FontDisplay.SWAP,
      },
    });
    this.setState({ fontsLoaded: true });
  }

  componentDidMount() {
    this.loadFonts();
    return(
      <Loading />
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.container_inside}>
          <Text style={styles.align}>
            ⚠ 주의 사항 ⚠{"\n"}
          </Text>
          <Text style={styles.text}> 
            해당 프로그램은 자가진단을{"\n"}
            자동화 하기 위해서 만들어진 것이며,{"\n"}
            만약 건강에 이상이 있을 경우{"\n"}
            직접 자가진단을 실행해야 합니다.{"\n"}
            해당 기능을 사용하여 생기는 책임은{"\n"}
            전부 사용자에게 있음을 알려드립니다.
          </Text>
        </View>
        <StatusBar style="auto" />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container_inside: {
    backgroundColor: "#ff5450",
    borderRadius: 20,
    padding: 20,
    paddingTop: 40,
    paddingBottom: 40,
  },
  text: {
    color: "white",
    fontFamily: 'DoHyeon',
    fontSize: 17,
  },
  align: {
    textAlign: "center",
    color: "white",
    fontFamily: 'DoHyeon',
    fontSize: 20,
  }
});
