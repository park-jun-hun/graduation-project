import {StatusBar} from 'expo-status-bar';
import React, {Component} from 'react';
import {Button, StyleSheet, Text, View, Dimensions} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeScreen from "./Home";
import MenuScreen from "./Menu";
import ChoiScreen from "./Choi";
import ParkScreen from "./Park";
import LeeScreen from "./Lee";
import {SafeAreaProvider} from 'react-native-safe-area-context';
import MenuIcon from "./svgs/menu";

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
                        options={({navigation, route}) => ({
                        
                            headerLeft: () => (
                                <HeaderIcon onPress={() => navigation.navigate('MenuScreen')}>
                                    <MenuIcon/>
                                </HeaderIcon>
                            ),
                            headerTitleAlign: "center",
                            headerTitleStyle: {
                                fontWeight: 'bold',
                                color: 'white',
                                fontSize: 20
                            }
                        })}/>
                    <Stack.Screen
                        name="MenuScreen"
                        component={MenuScreen}
                       />

                    <Stack.Screen
                        name="ChoiScreen"
                        component={ChoiScreen}/>
                    <Stack.Screen
                        name="ParkScreen"
                        component={ParkScreen}/>

                    <Stack.Screen
                        name="LeeScreen"
                        component={LeeScreen}/>

                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaProvider>
    );
}

const HeaderIcon = styled.TouchableOpacity`
margin-left: 30px;
margin-right: ${props => (props.home ? '0px' : '30px')};
`;
