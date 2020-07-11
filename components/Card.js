import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

import {mainColor} from '../constants/colors'

const Card = props => {
    return (
        <View style={{...styles.card, ...props.style}}>
            {props.children}
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        padding: 10,
        shadowColor: 'black',
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowRadius: 6,
        shadowOpacity: 0.2,
        elevation: 5,
        backgroundColor: mainColor,
        borderRadius: 10
    }
})

export default Card
