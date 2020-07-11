import React, {useEffect} from 'react'
import { StyleSheet, Image, View } from 'react-native'

const ImageScreen = ({route}) => {
    return (
        <View>
            <Image 
                source={{uri: route.params.full}}
                style={{width:'100%', height:'100%'}}
            />
        </View>
    )
}

export default ImageScreen

const styles = StyleSheet.create({})
