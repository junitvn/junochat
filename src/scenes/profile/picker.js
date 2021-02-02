import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Colors } from '_styles';
import Entypo from 'react-native-vector-icons/Entypo';
import _ from 'lodash';

const Picker = props => {
    const { onChange, data, selected, title } = props;
    let size = data.length;

    const shortenString = string => {
        if (string.length > 5) {
            return _.truncate(string, {
                'length': 8
            })
        } else {
            return _.pad(string, 8)
        }
    }

    return <View style={styles.container}>
        <View style={styles.titleContainer}>
            <Text style={styles.titleText}>{title}</Text>
        </View>
        <View style={styles.selectionContainer}>
            <TouchableOpacity
                onPress={() => onChange((selected + size - 1) % size)}
                disabled={selected == 0}>
                <Entypo
                    name="chevron-left"
                    style={selected == 0 ? styles.iconInactive : styles.iconActive} />
            </TouchableOpacity>
            <Text style={styles.selectedText}>{data[selected]}</Text>
            <TouchableOpacity
                onPress={() => onChange((selected + 1) % size)}
                disabled={selected == size - 1}>
                <Entypo
                    name="chevron-right"
                    style={selected != size - 1 ? styles.iconActive : styles.iconInactive} />
            </TouchableOpacity>
        </View>
    </View>
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "white",
        padding: 8,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 16
    },
    titleContainer: {
        flex: 3,
        justifyContent: 'center',
        alignItems: 'flex-start',
    },
    titleText: {
        fontSize: 17,
        color: 'black'
    },
    selectionContainer: {
        flex: 7,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: 8
    },
    selectedText: {
        fontSize: 18
    },
    unselectedText: {
        fontSize: 16
    },
    iconActive: {
        color: Colors.SECOND_GRADIENT,
        fontSize: 25
    },
    iconInactive: {
        color: Colors.GRAY_MEDIUM,
        fontSize: 25
    }
})

export default Picker;