import { Image, ScrollView, Text, View, ViewBase } from "react-native"
import React from 'react';
import { Header1 } from "./Header";
import FIcon from 'react-native-vector-icons/Feather'
const dp = require('./dp.jpg')
var { vw, vh, vmin, vmax } = require('react-native-viewport-units')
export const Profile = () => {
    return (<ScrollView >
        <Header1 title="Profile" />
        <View style={{ marginHorizontal: 20 }}>
            <View style={{ display: 'flex', flexDirection: 'row', width:'100%',alignItems: 'center',justifyContent:'space-between' }}>
                <View style={{flexDirection:'row',alignItems:'center'}}>
                <View style={{ margin: 10, width: 100, height: 100, borderRadius: 50, overflow: 'hidden' }}>
                    <Image style={{ width: 100, height: 100 }} source={dp} />
                </View>
                <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 30 }}>John Wick</Text>
                </View>
                <FIcon name='edit-3' style={{ alignSelf:'center' }} size={30} color='#31c593' />
            </View>
            <View>
                <Text style={{ color: 'black', fontSize: 20 }}>E-mail</Text>
                <Text style={{ color: 'black', fontWeight: '200', fontSize: 20 }}>john@gmail.com</Text>
            </View>
            <View style={{ marginVertical: 100 }}>
                <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                    <FIcon name='activity' size={30} color='#31c593' />
                    <Text style={{ color: 'black', margin: 10, fontSize: 20 }}>Help and support</Text>
                </View>
                <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                    <FIcon name='key' size={30} color='#31c593' />
                    <Text style={{ color: 'black', margin: 10, fontSize: 20 }}>How it works</Text>
                </View>
                <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                    <FIcon name='feather' size={30} color='#31c593' />

                    <Text style={{ color: 'black', margin: 10, fontSize: 20 }}>Theme</Text>
                </View>
            </View>
            <View >
                <Text style={{ color: 'red', textAlign: 'center', fontSize: 20 }}>logout</Text>
            </View>
        </View>
    </ScrollView>)
}
