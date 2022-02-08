import React, { useState } from "react";
import { Image, ScrollView, View, Text, TouchableOpacity, Modal } from "react-native";
import Icon from "react-native-vector-icons/Feather";
import { Header1 } from "./Header";
var { vh } = require('react-native-viewport-units')
const thumb = require('./thumb.jpg')
export const Notification: React.FC<{}> = () => {
    let focus: number = 0
    const [modal, setModal] = useState<boolean>(false)
    const [ids,setIds] = useState<number []>([1, 2, 3,8])
    const open: Function = (id: number) => {
        focus = id
        setModal(true)
    }
    const removeNotification=()=>{
        let list=ids
        list.splice(ids.indexOf(focus))
        setIds(list)
        setModal(false)
    }
    const cards = ids.map(id => <Card1 id={id} open={open} />)
    return (
        <View>
            <Header1 title="Notifications" />
            <ScrollView>
            <Text style={{ color: '#31c593', fontSize: 25, marginHorizontal: 30 }}>Today</Text>
            {cards}
            <Text style={{ color: '#31c593', fontSize: 25, marginHorizontal: 30 }}>Yesterday</Text>
            {cards}
            </ScrollView>
            <Modal visible={modal} transparent={true}>
                <View style={{ marginTop: 'auto', height: '40%', backgroundColor: 'white' }}>
                    <TouchableOpacity  onPressIn={() => setModal(false)}>
                        <View style={{ height: 8 * vh, width: 'auto', alignItems: 'center' }}>
                            <View style={{ marginTop: 4 * vh, width: '30%', borderRadius: 50, borderColor: 'grey', borderWidth: 5 }}>
                            </View>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={removeNotification} >
                        <View style={{flexDirection:'row',marginVertical:10,alignItems:'center'}}>
                            <Icon name='x-circle' size={50} color='#31c593' style={{marginHorizontal:30}} />
                            <Text style={{color:'black',maxWidth:'70%',fontSize:23}}> Remove this Notification</Text>
                        </View>
                    </TouchableOpacity><TouchableOpacity >
                        <View style={{flexDirection:'row',alignItems:'center',marginVertical:10}}>
                            <Icon name='x-circle' size={50} color='#31c593' style={{marginHorizontal:30}} />
                            <Text style={{color:'black',fontSize:23,maxWidth:'70%'}}>Torn off notification about this news type</Text>
                        </View>
                    </TouchableOpacity><TouchableOpacity >
                        <View style={{flexDirection:'row',alignItems:'center',marginVertical:10}}>
                            <Icon name='x-circle' size={50} color='#31c593' style={{marginHorizontal:30}} />
                            <Text style={{color:'black',maxWidth:'70%',fontSize:23}}> Report this to the team</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </Modal>
        </View>
    )
}
const Card1: React.FC<{ id: number, open: Function }> = ({ open, id }) => {
    return (
        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly' }}>
            <View style={{ flex: 5, margin: 10, borderRadius: 10, overflow: 'hidden' }}>
                <Image source={thumb} style={{ height: 11 * vh, width: 'auto' }} />
            </View>
            <Text style={{ flex: 6, padding: 2, fontSize: 14, color: 'black', fontWeight: '500' }}>
                Omnicron have captivated the major entities of the world.
            </Text>
            <TouchableOpacity onPress={() => open(id)} style={{ flex: 2, alignItems: 'center' }}>
                <Icon name='more-horizontal' size={30} color='black' />
            </TouchableOpacity>
        </View>
    )
}