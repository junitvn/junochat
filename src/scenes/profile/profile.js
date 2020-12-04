import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { BigHead } from 'react-native-bigheads';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Profile = () => {
    const [body, setBody] = useState("chest");
    return <View>
        <BigHead
            accessory="shades"
            bgColor="blue"
            bgShape="circle"
            body={body}
            clothing="tankTop"
            clothingColor="black"
            eyebrows="angry"
            eyes="wink"
            facialHair="mediumBeard"
            graphic="vue"
            hair="short"
            hairColor="black"
            hat="none"
            hatColor="green"
            lashes={false}
            lipColor="purple"
            mouth="open"
            showBackground={true}
            size={300}
            skinTone="brown"
        />
        <TouchableOpacity onPress={() => { setBody(body == "chest" ? "breasts" : "chest") }}>
            <Text>Change body</Text>
        </TouchableOpacity>
    </View>
}

export default Profile;