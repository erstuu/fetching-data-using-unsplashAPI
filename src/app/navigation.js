import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../components/HomeScreen';
import DetailsScreen from '../components/DetailsScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const bottomTab = "BottomTab";

const BottomTab = () => {
    return (
        <Tab.Navigator
            initialRouteName={"Home"}
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color, size }) => {
                    let iconName;
                    if (route.name === 'Home') {
                        iconName = 'home';
                    } else if (route.name === 'Details') {
                        iconName = 'list';
                    }
            
                    return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: 'tomato',
                tabBarInactiveTintColor: 'gray',
                tabBarLabelStyle: {
                    paddingBottom: 10,
                    fontSize: 10
                },
                tabBarStyle: {
                    padding: 10,
                    height: 60,
                }
            })}
        >
            <Tab.Screen
                name="Home"
                component={HomeScreen}
            />
            <Tab.Screen
                name="Details"
                component={DetailsScreen}
            />
        </Tab.Navigator>
    );
};

const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={bottomTab} screenOptions={{ headerShown: false }}>
                <Stack.Screen name={bottomTab} component={BottomTab} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigator;