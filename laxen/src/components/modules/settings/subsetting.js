import * as React from 'react';
import { Text, View, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import * as colors from '../colors/colors';
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const styles = StyleSheet.create({
    headerContainer: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: colors.white,
        height: '8%',
        width: '100%',
        paddingLeft: '4%',
        paddingRight: '4%',
        borderBottomColor: colors.grey,
        borderBottomWidth: 1,
        paddingBottom: '0%',
        fontFamily: 'poppins',
    },
    headerFont: {
        width: 'fit-content',
        backgroundColor: colors.white,
        fontFamily: 'poppins',
        fontSize: 32,
        fontWeight: 'bold',
        color: colors.black,
    },
});

const DATA = [
    {}
];

function subSetting({ route, navigation }) {
    const { } = route.params;

    return (
        <View>
            <View style={styles.headerContainer}>
                <Text h1 style={styles.headerFont}>{title}</Text>
                <Icon
                    name="close-outline"
                    size={30}
                    color={colors.black}
                    onPress={() => { navigation.navigate("groups"); }}
                />
            </View>
        </View>
    )
}

export default subSetting;