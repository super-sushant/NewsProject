import { NavigationAction, NavigationContainerProps, useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp, NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Icon from 'react-native-vector-icons/Entypo'
import FIcon from 'react-native-vector-icons/Feather'
export const Header2: React.FC<{}> = ({ }) => {
    const navigation = useNavigation()
    return (
        <View style={{ marginHorizontal: 30, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Icon name='bell' size={50} color='#31e593' />
                <Text style={{ fontWeight: 'bold', fontSize: 40, color: '#31e593' }}>Peal</Text>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <TouchableOpacity style={{ marginHorizontal: 10 }} onPress={() => navigation.navigate('notification')}>
                    <FIcon name='bell' size={25} />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('settings')} >
                    <FIcon name='settings' size={25} />
                </TouchableOpacity>
            </View>
        </View>
    )
}