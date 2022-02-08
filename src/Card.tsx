import { ScrollView, Text, View, Share, Image, TouchableOpacity } from "react-native"
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome'
import IIcon from 'react-native-vector-icons/Ionicons'

const thumb = require('./thumb.jpg')
var { vw, vh } = require('react-native-viewport-units')
export const Card: React.FC<{title?:string}> = ({title}) => {
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
            <Text style={{ color: '#31c593',margin:10 }}>Pandemic . Viral . Omnicron </Text>
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