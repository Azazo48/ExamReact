import React from "react";
import { useState } from 'react';
import { SafeAreaView, StyleSheet, Switch, Text, TouchableOpacity } from 'react-native';
import { myColors } from '../src/styles/Colors';
import { ThemeContext } from '../src/context/ThemeContext'

const PaginaBotonesYColor = () => {
    const [theme, setTheme] = useState('light');
    return (
      <ThemeContext.Provider value={theme}>
        <SafeAreaView style={theme === 'light' ? styles.container : [styles.container, {backgroundColor: 'black'}]}>
          <Switch
            value={theme === 'dark'}
            onValueChange={() => setTheme(theme === 'light' ? 'dark' : 'light')}
          />
            <TouchableOpacity
            style={{
                backgroundColor: "blue",
                padding: 10,
                marginTop: "20%",
                width: "50%",
                alignSelf: "center",
                borderRadius: 10,
            }}
            >
                <Text
                style={{
                    fontSize: 15,
                    textAlign: "center",
                    color: "white"
                }}
                >
                Boton 1
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
            style={{
                backgroundColor: "blue",
                padding: 10,
                marginTop: "20%",
                width: "50%",
                alignSelf: "center",
                borderRadius: 10,
            }}
            >
                <Text
                style={{
                    fontSize: 15,
                    textAlign: "center",
                    color: "white"
                }}
                >
                Boton 2
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
            style={{
                backgroundColor: "blue",
                padding: 10,
                marginTop: "20%",
                width: "50%",
                alignSelf: "center",
                borderRadius: 10,
            }}
            >
                <Text
                style={{
                    fontSize: 15,
                    textAlign: "center",
                    color: "white"
                }}
                >
                Boton 3
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
            style={{
                backgroundColor: "blue",
                padding: 10,
                marginTop: "20%",
                width: "50%",
                alignSelf: "center",
                borderRadius: 10,
            }}
            >
                <Text
                style={{
                    fontSize: 15,
                    textAlign: "center",
                    color: "white"
                }}
                >
                Boton 4
                </Text>
            </TouchableOpacity>
        </SafeAreaView>
      </ThemeContext.Provider>
    );
  
  }
export default PaginaBotonesYColor;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: myColors.light,
      alignItems: 'center',
      justifyContent: 'flex-start',
    },
  });