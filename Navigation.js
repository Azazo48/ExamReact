import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";

//screens
import HomeScreen from "./screens/HomeScreen";
import SettingsScreen from "./screens/SettingsScreen";
import StackScreen from "./screens/StackScreen";
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import Ionicons from '@expo/vector-icons/Ionicons';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Cal from "./screens/Calculadora";
import PaginasDeNoticias from "./screens/PaginaDeNoticias";
import PaginaTextoImagen from "./screens/PaginaTextoImagen";
import ExamHub from "./screens/ExamHub";
import PaginaBotonesYColor from "./screens/PaginaBotonesYColor";
import PaginaVideo from "./screens/PaginaVideo";

const HomeStackNavigator = createNativeStackNavigator();

function MyStack() {
    return(
        <HomeStackNavigator.Navigator
            initialRouteName="HomeScreen"
            >
            <HomeStackNavigator.Screen
                name="HomeScreen"
                component={HomeScreen}
            />
            <HomeStackNavigator.Screen
                name="Stack"
                component={StackScreen}
                options={{
                    headerTitle: "Go Casa"
                }}
            />
            <HomeStackNavigator.Screen
                name="Examen"
                component={ExamHub}
                options={{
                    headerTitle: "Go Back"
                }}
            />
            <HomeStackNavigator.Screen
                name="PaginaTextoImagen"
                component={PaginaTextoImagen}
                options={{
                    headerTitle: "Go Back"
                }}
            />
            <HomeStackNavigator.Screen
                name="PaginaVideo"
                component={PaginaVideo}
                options={{
                    headerTitle: "Go Back"
                }}
            />
            <HomeStackNavigator.Screen
                name="PaginaBotonesYColor"
                component={PaginaBotonesYColor}
                options={{
                    headerTitle: "Go Back"
                }}
            />
        </HomeStackNavigator.Navigator>
    )
}

const Tab = createBottomTabNavigator();

function MyTabs() {
    return (
        <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
            tabBarActiveTintColor : 'blue',
        }}
        >{
            <Tab.Screen 
                name="Home" 
                component={MyStack}
                options={{
                    tabBarLabel: 'Casa',
                    tabBarIcon: ({ color, size}) => (
                        <MaterialCommunityIcons name="home" size={24} color="black" />
                    ),
                    tabBarBadge: 1,
                    headerShown: false
                }}
                />/*
            <Tab.Screen 
                name="Settings" 
                component={SettingsScreen}
                options={{
                    tabBarLabel: 'Settings',
                    tabBarIcon: ({ color, size}) => (
                        <Ionicons name="settings-sharp" size={24} color="black" />
                    )
                }}
                />/*
            <Tab.Screen 
                name="Cal" 
                component={Cal}
                options={{
                    tabBarLabel: 'Cal',
                    tabBarIcon: ({ color, size}) => (
                        <Ionicons name="settings-sharp" size={24} color="black" />
                    )
                }}
                />
            <Tab.Screen 
                name="Noticias" 
                component={PaginasDeNoticias}
                options={{
                    tabBarLabel: 'Noticias',
                    tabBarIcon: ({ color, size}) => (
                        <Ionicons name="settings-sharp" size={24} color="black" />
                    )
                }}
                />*/}
        </Tab.Navigator>
    );
}

export default function Navigation() {
    return (
        <NavigationContainer>
            <MyTabs/>
        </NavigationContainer>
    )
}

