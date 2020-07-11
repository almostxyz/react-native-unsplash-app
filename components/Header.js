import React from 'react'

import { View, Text, StyleSheet } from 'react-native'

import { mainColor, mainTextColor } from '../constants/colors'

const Header = props => {
    return (
        <View style={styles.header}>
            <Text style={styles.headerTitle}>{props.title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 72,
        paddingTop: 18,
        backgroundColor: mainColor,
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerTitle: {
        color: mainTextColor,
        fontSize: 18
    }
})

export default Header