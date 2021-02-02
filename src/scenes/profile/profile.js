import React, { useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import { BigHead } from 'react-native-bigheads';
import { Picker } from '_scenes';
import _ from 'lodash';
import styles from './profile.styles';

const Profile = () => {
  const [bodyIndex, setBodyIndex] = useState(0);
  const [clothingIndex, setClothingIndex] = useState(0);
  const [hairIndex, setHairIndex] = useState(0);
  const [accessoryIndex, setAccessoryIndex] = useState(0);
  const [bgColorIndex, setBgColorIndex] = useState(0);
  const [clothingColorIndex, setClothingColorIndex] = useState(0);
  const [eyesIndex, setEyesIndex] = useState(0);
  const [hairColorIndex, setHairColorIndex] = useState(0);
  const [lipColorIndex, setLipColorIndex] = useState(0);
  const [mouthIndex, setMouthIndex] = useState(0);
  const [skinToneIndex, setSkinToneIndex] = useState(0);

  const accessoryData = ['none', 'roundGlasses', 'tinyGlasses', 'shades', 'faceMask', 'hoopEarrings'];
  const bgColorData = ['blue', 'green', 'red', 'orange', 'yellow', 'turqoise', 'pink', 'purple'];
  const bodyData = ['chest', 'breasts'];
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
  const clothingColorData = ['white', 'blue', 'black', 'green', 'red'];
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
  const eyesData = ['normal', 'leftTwitch', 'happy', 'content', 'squint', 'simple', 'dizzy', 'wink', 'hearts', 'crazy', 'cute', 'dollars', 'stars', 'cyborg', 'simplePatch', 'piratePatch'];
  const hairColorData = ['blonde', 'orange', 'black', 'white', 'brown', 'blue', 'pink'];
  const lipColorData = ['red', 'purple', 'pink', 'turqoise', 'green'];
  const mouthData = ['grin', 'sad', 'openSmile', 'lips', 'open', 'serious', 'tongue', 'piercedTongue', 'vomitingRainbow'];
  const skinToneData = ['light', 'yellow', 'brown', 'dark', 'red', 'black'];

  const onChangeClothing = (index) => setClothingIndex(index);
  const onChangeHair = (index) => setHairIndex(index);
  const onChangeAccessory = (index) => setAccessoryIndex(index);
  const onChangeBgColor = (index) => setBgColorIndex(index);
  const onChangeBody = (index) => setBodyIndex(index);
  const onChangeClothingColor = (index) => setClothingColorIndex(index);
  const onChangeEyes = (index) => setEyesIndex(index);
  const onChangeHairColor = (index) => setHairColorIndex(index);
  const onChangeMouth = (index) => setMouthIndex(index);
  const onChangeLipColor = (index) => setLipColorIndex(index);
  const onChangeSkinTone = (index) => setSkinToneIndex(index);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.avatarContainer}>
        <BigHead
          accessory={accessoryData[accessoryIndex]}
          bgColor={bgColorData[bgColorIndex]}
          body={bodyData[bodyIndex]}
          clothing={clothingData[clothingIndex]}
          clothingColor={clothingColorData[clothingColorIndex]}
          eyes={eyesData[eyesIndex]}
          hair={hairData[hairIndex]}
          hairColor={hairColorData[hairColorIndex]}
          mouth={mouthData[mouthIndex]}
          skinTone={skinToneData[skinToneIndex]}
          showBackground={true}
          lashes={false}
          lipColor="red"
          bgShape="circle"
          graphic="none"
          facialHair="none"
          size={211}
          hatColor="green"
          hat="none"
          eyebrows="raised"
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
          style={{ marginBottom: 8 }}
          data={clothingData}
          selected={clothingIndex}
          onChange={onChangeClothing}
          title="Clothing"
        />
        <Picker
          data={accessoryData}
          selected={accessoryIndex}
          onChange={onChangeAccessory}
          title="Accessory"
        />
        <Picker
          data={bgColorData}
          selected={bgColorIndex}
          onChange={onChangeBgColor}
          title="BgColor"
        />
        <Picker
          data={bodyData}
          selected={bodyIndex}
          onChange={onChangeBody}
          title="Body"
        />
        <Picker
          data={clothingColorData}
          selected={clothingColorIndex}
          onChange={onChangeClothingColor}
          title="ClothingColor"
        />
        <Picker
          data={eyesData}
          selected={eyesIndex}
          onChange={onChangeEyes}
          title="Eyes"
        />
        <Picker
          data={hairColorData}
          selected={hairColorIndex}
          onChange={onChangeHairColor}
          title="HairColor"
        />
        <Picker
          data={mouthData}
          selected={mouthIndex}
          onChange={onChangeMouth}
          title="Mouth"
        />
        <Picker
          data={skinToneData}
          selected={skinToneIndex}
          onChange={onChangeSkinTone}
          title="SkinTone"
        />
      </View>
    </ScrollView>
  );
};

export default Profile;
