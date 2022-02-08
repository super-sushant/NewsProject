import { Header1 } from "./Header";
import { ScrollView, Text, View, Share, Image, Modal, TouchableOpacity } from "react-native"
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome'
import FIcon from 'react-native-vector-icons/Feather'
import IIcon from 'react-native-vector-icons/Ionicons'
import { Header2 } from "./Header2";
const thumb = require('./thumb.jpg')
var { vw, vh, vmin, vmax } = require('react-native-viewport-units')
export const Topic: React.FC<{}> = () => {
    const [modal, setModal] = useState<boolean>(false)
    const open = () => { setModal(true) }
    const title: string = 'Omicron have captivated the major entities of the world.'
    return (
        <View style={{ width: '95%', alignSelf: 'center' }}>
            <Header1 title='Topic' />
            <ScrollView style={{ width: '100%' }}>
                <Card title={title} open={open} />
                <Modal visible={modal} transparent={true}>
                    <View style={{ marginTop: 'auto', height: '40%', backgroundColor: 'white' }}>
                        <TouchableOpacity onPressIn={() => setModal(false)}>
                            <View style={{ height: 8 * vh, width: 'auto', alignItems: 'center' }}>
                                <View style={{ marginTop: 3 * vh, width: '30%', borderRadius: 50, borderColor: 'grey', borderWidth: 5 }}>
                                </View>
                            </View>
                        </TouchableOpacity>
                        <View style={{ marginVertical: 40 }}>
                            <TouchableOpacity  >
                                <View style={{ flexDirection: 'row', marginVertical: 5, alignItems: 'center' }}>
                                    <FIcon name='book-open' size={35} color='#31c593' style={{ marginHorizontal: 30 }} />
                                    <Text style={{ color: 'black', maxWidth: '70%', fontSize: 23 }}> Open the topic</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity >
                                <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 5 }}>
                                    {/* <Icon name='x-circle' size={50} color='#31c593' style={{ marginHorizontal: 30 }} /> */}
                                    <Text style={{ color: '#31c593', fontSize: 35, maxWidth: '70%', marginHorizontal: 30 }}>aA</Text>
                                    <Text style={{ color: 'black', fontSize: 23, maxWidth: '70%' }}>Reading Options font size</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity >
                                <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 5 }}>
                                    <FIcon name='feather' size={35} color='#31c593' style={{ marginHorizontal: 30 }} />
                                    <Text style={{ color: 'black', maxWidth: '70%', fontSize: 23 }}> Themes</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity onPress={() => setModal(false)}>
                            <Text style={{ color: '#31c593', textAlign: 'center', fontSize: 23 }}>cancel</Text>
                        </TouchableOpacity>
                    </View>
                </Modal>
            </ScrollView>
        </View>
    )
}
const Card: React.FC<{ title?: string, open: any }> = ({ title, open }) => {
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
        <View style={{ alignSelf: 'center', overflow: 'hidden', margin: 30, marginBottom: 150, width: '95%' }}>
            <View style={{ flexDirection: 'row', width: '100%' }}>
                <Image style={{ width: 'auto', height: 15 * vh, borderRadius: 10, flex: 1 }} source={thumb} />
                <View style={{ flex: 1 }}>
                    <TouchableOpacity onPress={open}>
                        <Icon name='ellipsis-v' size={30} color="black" style={{ alignSelf: 'flex-end' }} />
                    </TouchableOpacity>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
                        <Icon name='play' size={30} color='#31c593' />
                        <FIcon name='volume-x' size={30} color='black' />
                        <View></View>
                    </View>
                    <View style={{ borderColor: '#31c593', borderWidth: 2, width: '80%', margin: 25, marginBottom: 0 }}></View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ color: '#31c593', fontSize: 15 }}>      1.56</Text>
                        <Text style={{ color: '#31c593', fontSize: 15 }}>1.56  </Text>
                    </View>
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
            <Text style={{ color: 'black', fontSize: 17, marginVertical: 10, fontWeight: '500' }}>{title ? title : ''} </Text>
            <View style={{ marginVertical: 20 }}>
                {randText.map((el, index) => <Text style={{ color: index === 1 ? '#31c593' : 'black', fontSize: 15 }}>{el}</Text>)}
            </View>
            <Text style={{ color: "#31c593", textAlign: 'right', fontWeight: '500', fontSize: 20 }}>Read this on web</Text>
        </View>
    )
}
const randText = ['Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc blandit pellentesque velit, vitae facilisis dui rhoncus ut. Suspendisse potenti. Duis a fermentum nulla.',
    'Nunc luctus libero enim, vitae dictum turpis finibus a. Sed mattis, libero vel lobortis rutrum, metus enim fermentum orci, eget imperdiet purus dolor vel arcu.',
    ' Morbi sed porttitor lorem. Cras libero turpis, euismod quis dolor non, efficitur consectetur erat. Maecenas suscipit urna eget pulvinar posuere. In nec feugiat dolor. Nullam non elit efficitur, accumsan purus et, imperdiet quam. Donec fermentum dapibus erat ut volutpat. Vestibulum fermentum, augue sed dictum lacinia, leo erat volutpat arcu, ut sodales tellus magna eu libero. Duis et justo maximus, pharetra nibh ut, egestas sem. Suspendisse nec nunc sem. Nullam vitae suscipit nulla, in lacinia tellus. Etiam vel ante vitae erat vehicula faucibus.',
    'Nam commodo nulla molestie vulputate maximus. Etiam quis urna ultrices, placerat dolor a, facilisis lorem. Etiam in ex pharetra, imperdiet mauris vel, cursus nibh. Sed mollis porttitor lectus vitae gravida. Vivamus vel vestibulum mi. ',
    'Aenean tincidunt dignissim tristique. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum pellentesque orci vitae tincidunt rhoncus.']