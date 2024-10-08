import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

const PaginaTextoImagen = () => {
    return(
        <View>

            <Text
                style={{
                    fontSize: 30,
                    textAlign: "center",
                    marginTop: "20%"
                }}
            >Carnita Asada En La UT</Text>
            <Image 
                source={require('../assets/Carne.jpg')}
                style={{ 
                    width: 300, 
                    height: 200, 
                    alignSelf: "center", 
                    marginTop: 20 
                }} 
            />
            <Text
                Style={{
                    fontSize: 28,
                }}
            >Despues de un largo cuatrimestre los alumnos de la Universidad Tecnologica De San Luis Rio Colorado se dispusieron a hacer una carnita asada</Text>
            
            
        </View>
    );
}

export default PaginaTextoImagen;