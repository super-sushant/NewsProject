import { useNavigation } from "@react-navigation/native"
import React from "react"
import { Text, TouchableOpacity, View } from "react-native"
import Icon from 'react-native-vector-icons/Feather'
interface Props {
    title: string;
    search?: boolean;
}
export const Header1: React.FC<Props> = ({ title, search }) => {
    const nav=useNavigation()
    return (
        <View style={{ alignItems: 'center', borderBottomColor: 'lightgrey', flexDirection: 'row', justifyContent: 'space-evenly', borderBottomWidth: 3 }} >
            {title === 'Notifications' ?
                <Icon name='bell' size={40} color={'#31c593'} /> :
                title === 'Topic' ?<TouchableOpacity onPress={()=>nav.goBack()}>
<Icon name='arrow-left' size={35} />
                </TouchableOpacity>  : <></>
            }
            <Text style={[{ padding: 20, color: title === 'Notifications' ? '' : '#31c593',fontSize: 26 },search?{borderWidth:2,borderRadius:100,borderColor:'#31c593',padding:0,width:'50%',textAlign:'center',margin:20}:{}]}>{title}</Text>
            {title === 'Notifications' ?
                <Icon name='search' size={30} /> :
                title === 'Topic' ? <Icon name='arrow-right' size={35} /> : <></>}
        </View>
    )
}