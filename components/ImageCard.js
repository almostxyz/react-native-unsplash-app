import React from 'react'
import { View, StyleSheet, Text, Image, Dimensions } from 'react-native'

import Card from './Card'
import { TouchableOpacity } from 'react-native-gesture-handler'

const ImageCard = props => {
    const ratio = props.image.width / (Dimensions.get('window').width - 40 /*margins and paddings */)
    const height = props.image.height / ratio

    const styles = StyleSheet.create({
        card: {
            width: '100%',
            marginVertical: 10,
            backgroundColor: props.image.color,
        },
        image: {
            width: '100%',
            height
        },
        textContainer: {
            borderRadius: 10,
            backgroundColor: 'white',
            opacity: 0.5,
            alignSelf: 'flex-end',
            padding: 5,
            marginTop: 5,
            flex: 1,
            position: 'absolute',
            right: 10,
            bottom: 10
            
        }
    })

    return (

        <Card style={styles.card}>
            <TouchableOpacity
                onPress={props.navigateToImage.bind(this, props.full)}
                activeOpacity={0.8}
            >
                <Image
                    borderRadius={10}
                    style={styles.image}
                    source={{ uri: props.image.urls.thumb }}
                />
            
            <View style={styles.textContainer}>
                <Text>{props.image.user.username}</Text>
            </View>
            </TouchableOpacity>
        </Card >

    )
}

export default ImageCard
