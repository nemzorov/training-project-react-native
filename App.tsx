import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { Input } from './src/components/input/component';
import { LogoSVG } from './src/components/svg/logo';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export default function App() {
  
  return (
    <View style={styles.container}>
      <View style={styles.logo}><LogoSVG /></View>
      <View style={styles.content}>
        <View style={styles.title}><Text style={styles.titletext}>Авторизация</Text></View>
        <View style={styles.form}>
          <Input placeholder='Email'></Input>
          <Input placeholder='Пароль' isPassword></Input>
          <Pressable style={styles.button}>
            <Text style={styles.buttontext}>Войти</Text>
          </Pressable>
        </View>
      </View>
      <View style={styles.bottom}>
        <Button color={Colors.white} title='Забыл пароль'></Button>
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#14161c',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    justifyContent: 'center',
  },
  logo: {
    alignItems: 'center',
    marginBottom: 30
  },
  title: {
    marginBottom: 20,
    alignItems: 'center',
  },
  titletext: {
    color: '#fff',
    fontSize: 36,
  },
  form: {
    gap: 12,
    width: 320,
  },
  button: {
    height: 60,
    backgroundColor: 'green',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
  },
  buttontext: {
    color: '#fff',
    fontSize: 18
  },
  bottom: {
    marginTop: 20,
    alignItems: 'center',
  },
});
