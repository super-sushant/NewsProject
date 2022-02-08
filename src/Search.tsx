import { Header1 } from './Header';
import { Card } from './Card';
import { useNavigation } from '@react-navigation/native';
import { ScrollView, Text, View, Share, Image, Modal, TouchableOpacity } from "react-native"
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome'
import IIcon from 'react-native-vector-icons/Ionicons'
const thumb = require('./thumb.jpg')
var { vw, vh, vmin, vmax } = require('react-native-viewport-units')
export const Search: React.FC<{}> = () => {
    const [s, setS] = useState<boolean>(true)
    return (
        <View>
            <Header1 title="Omicron" search={true} />
            <ScrollView >

            {s ? <SimiliarTopics />:<></>}
            <CardSwitch s={s} sets={setS} />
            {s ? <Topics /> : <Articles />}
            </ScrollView>
        </View>
    )
}
const Articles = () => {
    const title: string = 'Omicron have captivated the major entities of the world.'
    const navigation = useNavigation()
    const list = [1, 2, 3, 4, 5, 6, 7, 8].map(e => <TouchableOpacity onPress={() => navigation.navigate('topic')}>
        <Card title={title} />
    </TouchableOpacity>)
    return (
        <ScrollView>
            {list}
        </ScrollView>
    )
}
const SimiliarTopics =()=>{
    return(
        <View>
            <Text style={{fontSize:25,margin:10,fontWeight:'500',color:'black'}}>Similiar Topics</Text>
            <ScrollView horizontal={true} style ={{flexDirection:'row',overflow:'scroll'}} >
            <Image source={thumb}  style={{borderRadius:15,margin:10,height:17*vh,width:50*vw}} />
            <Image source={thumb}  style={{borderRadius:15,margin:10,height:17*vh,width:50*vw}} />
            <Image source={thumb}  style={{borderRadius:15,margin:10,height:17*vh,width:50*vw}} />
            <Image source={thumb}  style={{borderRadius:15,margin:10,height:17*vh,width:50*vw}} />
            <Image source={thumb}  style={{borderRadius:15,margin:10,height:17*vh,width:50*vw}} />
            <Image source={thumb}  style={{borderRadius:15,margin:10,height:17*vh,width:50*vw}} />
                
                </ScrollView>
        </View>
    )
}
const Topics = () => {
    const title: string = 'Omicron have captivated the major entities of the world.ajd jdhfjhas fjsdjah fjdsahf;j;asf lsdcns sdjf jsdhkl djflj ahfkd fdjhj'
    return (
        <ScrollView>
            <Card1 title={title}/>
            <Card1 title={title}/>
            <Card1 title={title}/>
            <Card1 title={title}/>
            <Card1 title={title}/>
            <Card1 title={title}/>
        </ScrollView>
    )
}
const Card1: React.FC<{ title?: string }> = ({ title}) => {
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
                if (result.activityType) {// shared with activity type of result.activityType
                } else {// shared
                }
            } else if (result.action === Share.dismissedAction) {// dismissed 
            }
        } catch (error) { }
    };
    return (
        <View style={{ alignSelf: 'center', overflow: 'hidden', margin: 10, width: '90%' }}>
            <View style={{ flexDirection: 'row', width: '100%' }}>
                <Image style={{ width: 'auto', height: 12 * vh, borderRadius: 10,margin:5, flex: 1 }} source={thumb} />
                <View style={{ flex: 1 }}>
                    <Text style={{ color: 'black', fontSize: 14, margin: 10, fontWeight: '500' }}>{title ? title : ''} </Text>
                </View>
            </View>
            <Text style={{ color: '#31c593' }}>Pandemic . Viral . Omnicron </Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Text>
                           1w  .  Virus     
                    </Text>
                    <TouchableOpacity style={{ padding: 10 }} onPress={() => { setdisliked(false); setliked(!liked) }}>
                        <Icon name={liked ? 'thumbs-up' : 'thumbs-o-up'} size={20} color='#31c593' />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ padding: 10 }} onPress={() => { setliked(false); setdisliked(!disliked) }}>
                        <Icon name={disliked ? 'thumbs-down' : 'thumbs-o-down'} size={20} color='#31c593' />
                    </TouchableOpacity>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity style={{ padding: 10 }} onPress={handleShare}>
                        <IIcon name={'share-social-outline'} size={20} color='grey' />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ padding: 10 }} onPress={() => { setsaved(!saved) }}>
                        <Icon name={saved ? 'bookmark' : 'bookmark-o'} size={20} color={saved ? '#31c593' : 'grey'} />
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}
const CardSwitch: React.FC<{ s: boolean, sets: any }> = ({ s, sets }) => {
    const [current, setcurrent] = useState<string>('all')
    const topics = { fontSize: 15, flex: 1, textAlign: 'center', width: 'auto', fontWeight: '500', borderWidth: 1, borderRadius: 5, padding: 10, marginHorizontal: 30 }
    return (
        <View style={{ flexDirection: 'row', height: 40, margin: 10 }}>
            <TouchableOpacity style={{ flex: 1 }} onPress={() => sets(true)} >
                <Text style={[topics, { color: s ? 'white' : 'black', borderColor:'#31e593' , backgroundColor: s ? '#31e593' : 'transparent' }]}> Topics</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ flex: 1 }} onPress={() => sets(false)} >
                <Text style={[topics, { color: !s ? 'white' : 'black', borderColor: '#31e593', backgroundColor: !s ? '#31e593' : 'transparent' }]}>Articles</Text>
            </TouchableOpacity>
        </View>
    )
}