import {StatusBar} from 'expo-status-bar';
import React, {Component} from 'react';
import {Button, StyleSheet, Text, View, Dimensions} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeScreen from "./Home";
import ChoiScreen from "./Choi";
import ParkScreen from "./Park";
import LeeScreen from "./Lee";
import {SafeAreaProvider} from 'react-native-safe-area-context';


import styled from "styled-components/native";
export const winWidth = Dimensions.get('window').width;
export const winHeight = Dimensions.get('window').height;
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

export default function App() {
   

    return (

        <SafeAreaProvider>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="HomeScreen" screenOptions={{
                    headerStyle: {
                        backgroundColor: '#484848',
                        shadowColor: 'transparent',
                        height: winHeight * 0.12
                    },
                    headerTitleStyle: {
                        fontSize: 20,
                        color: 'white'
                    }
                }}>
                    <Stack.Screen
                        name="HomeScreen"
                        component={HomeScreen}
                        options={{headerShown: false}}
                          
                            
                        />
                

                    <Stack.Screen
                        name="ChoiScreen"
                        component={ChoiScreen}
                        options={{headerShown: false}}/>
                    <Stack.Screen
                        name="ParkScreen"
                        component={ParkScreen}
                        options={{headerShown: false}}/>

                    <Stack.Screen
                        name="LeeScreen"
                        component={LeeScreen}
                        options={{headerShown: false}}/>

                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaProvider>
    );
}
