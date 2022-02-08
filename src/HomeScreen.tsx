import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import React from 'react';
import Icon from 'react-native-vector-icons/Feather'
import { ScrollView } from "react-native";
import { Search } from "./Search"
import { Profile } from "./Profile"
import { Saved } from "./Saved"
import { Home } from "./Home";
const Tab = createBottomTabNavigator()
var { vw, vh, vmin, vmax } = require('react-native-viewport-units')
export const HomeScreen: React.FC<{}> = () => {
    return (
        <Tab.Navigator initialRouteName="Home" backBehavior='history' screenOptions={
            ({ route}) => ({
                headerShown: false,
                tabBarShowLabel: false,
                tabBarIcon: ({ color, size }) => {
                    const icons = {
                        Home: 'home',
                        Profile: 'user',
                        Saved: 'bookmark',
                        Search: 'search'
                    };
                    return (
                        <Icon
                            name={icons[route.name]}
                            color={color}
                            size={size}
                        />
                    );
                },
                tabBarActiveTintColor: '#31c593'
            })
        } >
            <Tab.Screen name='Home' component={Home} />
            <Tab.Screen name='Search' component={Search} />
            <Tab.Screen name='Saved' component={Saved} />
            <Tab.Screen name='Profile' component={Profile} />
        </Tab.Navigator>
    )
}