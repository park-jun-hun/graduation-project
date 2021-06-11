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
import LoginScreen from "./Login";
import IntroScreen from "./Intro";
import RecordScreen from "./park/record";
import ScoreScreen from "./park/score";
import CheckScreen from "./park/check";
import InfoScreen from "./park/info";
import InputScreen from "./Input";
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';
import reducers from './reducers';
import ActionCreator from './actions';
import {createStore} from 'redux';
import styled from "styled-components/native";
export const winWidth = Dimensions.get('window').width;
export const winHeight = Dimensions.get('window').height;
const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

export default function App() {
   

    return (
<Provider store={createStore(reducers)}>
        <SafeAreaProvider>
            <NavigationContainer>
                <Stack.Navigator initialRouteName="LoginScreen" screenOptions={{
                    
                }}>
                    <Stack.Screen
                        name="HomeScreen"
                        component={HomeScreen}
                        options={{headerShown: false}}
                                  
                        />
                  <Stack.Screen
                        name="LoginScreen"
                        component={LoginScreen}
                        options={{headerShown: false}}/>

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
                         <Stack.Screen
                        name="IntroScreen"
                        component={IntroScreen}
                        options={{headerShown: false}}/>
                        <Stack.Screen
                        name="RecordScreen"
                        component={RecordScreen}
                        options={{headerShown: false}}/>
                        <Stack.Screen
                        name="CheckScreen"
                        component={CheckScreen}
                        options={{headerShown: false}}/>
                        <Stack.Screen
                        name="InfoScreen"
                        component={InfoScreen}
                        options={{headerShown: false}}/>
                        <Stack.Screen
                        name="ScoreScreen"
                        component={ScoreScreen}
                        options={{headerShown: false}}/>
                           <Stack.Screen
                        name="InputScreen"
                        component={InputScreen}
                        options={{headerShown: false}}/>

                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaProvider>
        </Provider>
    );
}
