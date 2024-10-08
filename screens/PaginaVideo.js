import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Video } from "expo-av";

const PaginaVideo = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pagina Video</Text>
      <Video
        source={{ uri: "https://drive.google.com/uc?export=download&id=1o2yXA0jqTTQW9TywTAad17HWgaujFBpN" }}
        style={styles.video}
        useNativeControls
        resizeMode="contain"
        shouldPlay
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    textAlign: "center",
    marginBottom: 20,
  },
  video: {
    width: 300,
    height: 200,
  },
});

export default PaginaVideo;