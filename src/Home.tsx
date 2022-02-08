import { ScrollView, Text, View, Share, Image, TouchableOpacity } from "react-native"
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome'
import IIcon from 'react-native-vector-icons/Ionicons'
import { Header2 } from "./Header2";
import { createNativeStackNavigator, NativeStackNavigationProp } from "@react-navigation/native-stack";
import { Notification } from "./Notification";
import { Settings } from "./Settings";
import { NavigationAction, NavigationContainerProps, NavigationProp } from "@react-navigation/native";
import { Topic } from "./Topic";
const thumb = require('./thumb.jpg')
var { vw, vh } = require('react-native-viewport-units')
const Stack=createNativeStackNavigator()
export const Home: React.FC<{}> = () => {
    return (
            <Stack.Navigator screenOptions={{headerShown:false}}>
                <Stack.Screen name='home' component={HomeScreen}/>
                <Stack.Screen name='notification' component={Notification}/>
                <Stack.Screen name='settings' component={Settings}/>
                <Stack.Screen name='topic' component={Topic}/>
            </Stack.Navigator>
        
    )
}
const HomeScreen:React.FC<{navigation:NativeStackNavigationProp}> =({navigation})=>{
    const title:string='Omicron have captivated the major entities of the world.'
    return(
        <View>
        <Header2 navigation={navigation}/>
            <ScrollView >
                <CardSwitch />
                <TouchableOpacity onPress={()=>navigation.navigate('topic')}>
                <Card title={title}/>
                </TouchableOpacity> 
                <TouchableOpacity onPress={()=>navigation.navigate('topic')}>
                <Card title={title}/>
                </TouchableOpacity> 
                <TouchableOpacity onPress={()=>navigation.navigate('topic')}>
                <Card title={title}/>
                </TouchableOpacity> 
                <TouchableOpacity onPress={()=>navigation.navigate('topic')}>
                <Card title={title}/>
                </TouchableOpacity> 
                <TouchableOpacity onPress={()=>navigation.navigate('topic')}>
                <Card title={title}/>
                </TouchableOpacity> 
                <TouchableOpacity onPress={()=>navigation.navigate('topic')}>
                <Card title={title}/>
                </TouchableOpacity> 
                <TouchableOpacity onPress={()=>navigation.navigate('topic')}>
                <Card title={title}/>
                </TouchableOpacity> 
                

            </ScrollView>
        </View>
    )
}
const Card: React.FC<{title?:string}> = ({title}) => {
    const [liked, setliked] = useState<boolean>(false)
    const [disliked, setdisliked] = useState<boolean>(false)
    const [saved, setsaved] = useState<boolean>(false)
    const handleShare = async () => {
        try {
            const result = await Share.share({
                message:
                    'Omicron have captivated the major entities of the world.',
            });
            if (result.action === Share.sharedAction) {
                if (result.activityType) {
                    // shared with activity type of result.activityType
                } else {
                    // shared
                }
            } else if (result.action === Share.dismissedAction) {
                // dismissed
            }
        } catch (error) {
            //   alert(error.message);
        }
    };
    return (
        <View style={{ width: 'auto', alignSelf: 'center', overflow: 'hidden', margin: 10 }}>
            <Image style={{ width: 'auto', height: 20 * vh, borderRadius: 10 }} source={thumb} />
            <Text style={{ color: '#31c593' }}>Pandemic . Viral . Omnicron </Text>
            <Text>{title?title:''} </Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text>
                           1w  .  Virus     
                    </Text>
                    <TouchableOpacity style={{ margin: 10 }} onPress={() => { setdisliked(false); setliked(!liked) }}>
                        <Icon name={liked ? 'thumbs-up' : 'thumbs-o-up'} size={20} color='#31c593' />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ margin: 10 }} onPress={() => { setliked(false); setdisliked(!disliked) }}>
                        <Icon name={disliked ? 'thumbs-down' : 'thumbs-o-down'} size={20} color='#31c593' />
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity style={{ margin: 10 }} onPress={handleShare}>
                        <IIcon name={'share-social-outline'} size={20} color='grey' />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ margin: 10 }} onPress={() => { setsaved(!saved) }}>
                        <Icon name={saved ? 'bookmark' : 'bookmark-o'} size={20} color={saved ? '#31c593' : 'grey'} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>

    )
}
const CardSwitch: React.FC<{}> = ({ }) => {
    const [current, setcurrent] = useState<string>('all')
    const topics = { fontSize: 15, flex: 1, textAlign: 'center', width: 'auto', borderWidth: 1, borderRadius: 5, padding: 5, margin: 8 }
    return (
        <View style={{ flexDirection: 'row',}}>
            <TouchableOpacity style={{ flex: 1 }} onPress={() => setcurrent('all')} >
                <Text style={[topics, { color: current === 'all' ? 'white' : 'black', borderColor: current === 'all' ? '#31e593' : 'black', backgroundColor: current === 'all' ? '#31e593' : 'white' }]}> All</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ flex: 1 }} onPress={() => setcurrent('trend')} >
                <Text style={[topics, { color: current === 'trend' ? 'white' : 'black', borderColor: current === 'trend' ? '#31e593' : 'black', backgroundColor: current === 'trend' ? '#31e593' : 'white' }]}> Trending</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ flex: 1 }} onPress={() => setcurrent('sport')} >
                <Text style={[topics, { color: current === 'sport' ? 'white' : 'black', borderColor: current === 'sport' ? '#31e593' : 'black', backgroundColor: current === 'sport' ? '#31e593' : 'white' }]}> Sports</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ flex: 1 }} onPress={() => setcurrent('world')} >
                <Text style={[topics, { color: current === 'world' ? 'white' : 'black', borderColor: current === 'world' ? '#31e593' : 'black', backgroundColor: current === 'world' ? '#31e593' : 'white' }]}> World</Text>
            </TouchableOpacity>
        </View>
    )
}