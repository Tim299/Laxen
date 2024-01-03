import * as React from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import * as colors from '../colors/colors';

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

function SubSetting() {
    return (
        <ScrollView>
            <View style={{ marginLeft: 10, marginRight: 10, marginTop: 6 }}>
                <Text style={{ fontSize: 17, color: '#404040' }}>
                    Laxen version: 0.0.1
                    {'\n\n'}Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eleifend blandit odio, ac tincidunt dolor bibendum sit amet. Maecenas non convallis ligula. Sed libero ante, sollicitudin sed sapien eu, dapibus feugiat justo. Duis sed lectus ac nulla mollis mattis. Vivamus sed consectetur nulla. Integer convallis vulputate placerat. Nulla velit massa, eleifend sit amet quam et, tempus faucibus nunc. Morbi fermentum pharetra nulla. 
                    {'\n\n'}Nam molestie molestie elit quis ultrices. Fusce ut dictum mauris, quis convallis orci. Quisque aliquam orci vitae lacus vehicula, ut porttitor ex mollis. Etiam eleifend purus a ex finibus, vel dignissim eros finibus. In dapibus vulputate risus, at convallis nisi commodo id. Duis et ex sed tortor pellentesque ullamcorper. Mauris pulvinar felis vel ligula finibus volutpat.
                    {'\n\n'}Pellentesque mollis nibh vel condimentum aliquam. Vestibulum iaculis laoreet lorem. In ut enim eget mi tincidunt dignissim vitae vitae lorem. Pellentesque cursus arcu ex, sed aliquet urna convallis id. Aliquam ac interdum neque. Morbi nec lorem id lectus cursus consequat. Sed rhoncus nunc vel arcu pulvinar, eu venenatis urna venenatis.
                    {'\n\n'}Quisque leo dui, euismod et sodales vitae, commodo eu ex. Nulla eu rutrum orci. Etiam diam nunc, lacinia a malesuada nec, congue nec metus. In hac habitasse platea dictumst. Nulla non metus in velit sollicitudin gravida eu eu velit. Fusce semper finibus mi eu auctor. Curabitur nec dapibus lectus. Sed non est consequat, vestibulum ante et, eleifend ligula.</Text>
            </View>
        </ScrollView>
    );
};

export default SubSetting;