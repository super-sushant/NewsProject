import React from "react";
import { Button, ScrollView, Text, TextInput, View } from "react-native";
import Icon from "react-native-vector-icons/Feather";
import { Header1 } from "./Header";

export const Settings: React.FC<{}> = () => {
    return (
        <ScrollView >
            <Header1 title='Settings' />
            <View style={{ margin: 10 }}>
                <Text style={{ marginVertical: 10, color: 'grey', fontWeight: '800', fontSize: 30 }}>Peel Premium</Text>
                <View>
                    <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                        <View style={{ margin: 10, height: 60, width: 60, backgroundColor: '#31c593', alignItems: 'center', justifyContent: 'center', borderRadius: 50, overflow: 'hidden' }}>
                            <Icon name="star" size={30} color='white' />
                        </View>
                        <Text style={{ color: 'black',fontSize: 20 }}>Premium subscription</Text>
                    </View>
                    <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                        <View style={{ margin: 10, height: 60, width: 60, backgroundColor: '#31c593', alignItems: 'center', justifyContent: 'center', borderRadius: 50, overflow: 'hidden' }}>
                            <Icon name="gift" size={30} color='white' />
                        </View>
                        <Text style={{color:'black', fontSize: 20 }}>Refer</Text>
                    </View>
                    <Text style={{ margin: 10, color: 'white', width: 'auto', backgroundColor: '#31c593', borderRadius: 100, padding: 15, fontSize: 25, textAlign: 'center' }}> Invite Friends</Text>
                    <Text style={{ color: '#31c593', margin: 10, fontSize: 20 }}> Select the plan yoou want to get news</Text>
                </View>
                {list}
                {list}
                {list}
                {list}
                {list}
                <View style={{ alignItems: 'center' ,marginVertical:40}}>
                    <View style={{ height: 60, width: 60, borderRadius: 50, backgroundColor: '#31c593', alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={{ fontSize: 40, color: 'white' }}>+</Text>
                    </View>
                    <Text style={{ margin: 10, color: 'white', width: '40%', backgroundColor: '#31c593', borderRadius: 100, padding: 10, fontSize: 25, textAlign: 'center' }}> save</Text>

                </View>

                <Text style={{margin:10,fontSize:30,fontWeight:'bold'}}>About<Text style={{color:'#31c593'}}> Peels</Text></Text>
                <Text style={textWithBorder}>Share peel with friends</Text>
                <Text style={textWithBorder}>Feedbacks</Text>
                <Text style={textWithBorder}>FAQs</Text>
                <Text style={textWithBorder}>Terms of use</Text>
                <Text style={textWithBorder}>Privacy Policy</Text>
            </View>
        </ScrollView>
    )
}
const topics = {  color:'black',fontSize: 20, flex: 1, textAlign: 'center', width: 'auto', borderColor: '#31c593', borderWidth: 1, borderRadius: 50, padding: 10, margin: 10}

const list=<View style={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap' }}>
<Text style={topics}>Life</Text>
<Text style={topics}>sports</Text>
<Text style={topics}>politics</Text>
</View>
const textWithBorder = { fontSize: 20, borderColor: '#31c593', borderWidth: 1, borderRadius: 5, padding: 15, margin: 10 }