import React from 'react';
import { ScrollView, Text, View } from "react-native"
import { Header1 } from './Header';
import FIcon from 'react-native-vector-icons/Feather'
import Icon from 'react-native-vector-icons/FontAwesome'
export const Saved:React.FC<{}> = () => {
    return (
        <ScrollView>
            <Header1 title='Saved News' />
            <View style={{ margin: 30 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <FIcon name='plus' size={35} color='#31c593' />
                    <Text style={{ color: 'black', margin: 15, fontSize: 20 }}>Add News</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                    <Icon name='bookmark' size={35} color='#31c593' />
                    <Text style={{ color: 'black', margin: 20, fontSize: 20 }}>Saved News</Text>

                </View>
            </View>
        </ScrollView>
    )
}