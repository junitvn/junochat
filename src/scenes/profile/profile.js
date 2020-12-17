import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {BigHead} from 'react-native-bigheads';
import {Picker} from '_scenes';
import styles from './profile.styles';

const Profile = () => {
  const [body, setBody] = useState('chest');
  const [clothingIndex, setClothingIndex] = useState(0);
  const [hairIndex, setHairIndex] = useState(0);

  const onChange = (body) => setBody(body);
  const clothingData = [
    'shirt',
    'dressShirt',
    'vneck',
    'tankTop',
    'dress',
    'denimJacket',
    'hoodie',
    'chequeredShirt',
    'chequeredShirtDark',
  ];
  const hairData = [
    'long',
    'bun',
    'short',
    'pixie',
    'balding',
    'buzz',
    'afro',
    'bob',
    'mohawk',
  ];
  const onChangeClothing = (clothingIndex) => setClothingIndex(clothingIndex);
  const onChangeHair = (index) => setHairIndex(index);
  return (
    <View style={styles.container}>
      <View style={styles.avatarContainer}>
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
          size={250}
          skinTone="brown"
        />
      </View>
      <View style={styles.pickerContainer}>
        <Picker
          data={hairData}
          selected={hairIndex}
          onChange={onChangeHair}
          title="Hair"
        />
        <Picker
          style={{marginBottom: 8}}
          data={clothingData}
          selected={clothingIndex}
          onChange={onChangeClothing}
          title="Clothing"
        />
      </View>
    </View>
  );
};

export default Profile;
