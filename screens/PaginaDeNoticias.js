import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

const PaginasDeNoticias = () => {
    return(
        <View>
            <Text
                style={{
                    fontSize: 70,
                    textAlign: "center",
                    marginTop: "20%"
                }}
            >Noticias</Text>



            <Text
                style={{
                    fontSize: 30,
                    textAlign: "center",
                    marginTop: "20%"
                }}
            >Choque en la Nuevo Leon y 85</Text>
            <Image 
                source={require('../assets/choque1.jpeg')}
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
            >Despues de un atentado terrorista por parte del grupo armado los kamikaze los conductores empesaron a conducir para evitar estar involucrados y se ocasiono un choque entre 32 veiculos.</Text>
            
            
            
            <Text
                style={{
                    fontSize: 30,
                    textAlign: "center",
                    marginTop: "20%"
                }}
            >Choque entre alumnos de la UT</Text>
            <Image 
                source={require('../assets/choque2.jpg')}
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
            >Durante el orario de salida de los estudiantes de la Universidad Tecnologica De San Luis Rio Colorado se origino un choque por parte de un camino de autobus que hiba rumbo a una fabrica, el choque dejo a 69 personas heridas.</Text>
        </View>
    );
}

export default PaginasDeNoticias;