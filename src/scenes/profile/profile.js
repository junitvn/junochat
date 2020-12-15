import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { BigHead } from 'react-native-bigheads';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Picker } from '_scenes';

const Profile = () => {
    const [body, setBody] = useState("chest");
    const [clothingIndex, setClothingIndex] = useState(0);
    const [hairIndex, setHairIndex] = useState(0);

    const onChange = body => setBody(body);
    const clothingData = ['shirt', 'dressShirt', 'vneck', 'tankTop', 'dress', 'denimJacket', 'hoodie', 'chequeredShirt', 'chequeredShirtDark'];
    const hairData = ['long', 'bun', 'short', 'pixie', 'balding', 'buzz', 'afro', 'bob', 'mohawk'];
    const onChangeClothing = clothingIndex => setClothingIndex(clothingIndex);
    const onChangeHair = index => setHairIndex(index);
    return <View >
        <BigHead
            accessory="shades"
            bgColor="blue"
            bgShape="circle"
            body={body}
            clothing={clothingData[clothingIndex]}
            clothingColor="black"
            eyebrows="angry"
            eyes="wink"
            graphic="vue"
            hair={hairData[hairIndex]}
            hairColor="black"
            hat="none"
            hatColor="green"
            lashes={false}
            lipColor="purple"
            showBackground={true}
            size={200}
            skinTone="brown"
        />
        <Picker style={{ marginBottom: 8, }} data={clothingData} selected={clothingIndex} onChange={onChangeClothing} title="Clothing" />
        <Picker data={hairData} selected={hairIndex} onChange={onChangeHair} title="Hair" />
    </View>
}

export default Profile;