import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const ExamHub = () => {

    const navigation = useNavigation();

    return(
        <View>
            <TouchableOpacity
            onPress={() => navigation.navigate("PaginaTextoImagen")}
            style={{
                backgroundColor: "purple",
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
                Pagina 1
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
            onPress={() => navigation.navigate("PaginaVideo")}
            style={{
                backgroundColor: "purple",
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
                Pagina 2
                </Text>
            </TouchableOpacity>
            <TouchableOpacity
            onPress={() => navigation.navigate("PaginaBotonesYColor")}
            style={{
                backgroundColor: "purple",
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
                Pagina 3
                </Text>
            </TouchableOpacity>
        </View>
    );
}

export default ExamHub;