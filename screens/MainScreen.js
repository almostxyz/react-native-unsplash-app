import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { StyleSheet, Text, View, Image, FlatList } from 'react-native'

import { fetchImages } from '../actions/image'

import ImageCard from '../components/ImageCard'

const MainScreen = ({ route, navigation }) => {

    const store = useSelector(state => state.imagesReducer)

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchImages(10))
    }, [])

    const images = [
        {
            id: '1',
            uri: 'https://images.unsplash.com/photo-1592687632657-a5513c20565b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjE0NzcxMX0',
            author: 'Random author 1',
            width: 4000,
            height: 6000
        },
        {
            id: '2',
            uri: 'https://images.unsplash.com/photo-1592246031317-eb6c0931b7e7?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=200&fit=max&ixid=eyJhcHBfaWQiOjE0NzcxMX0',
            author: 'Random author 2',
            width: 3600,
            height: 2400
        },
    ]

    const handleNaviagte = (full) => {
        navigation.navigate(
            'ImageScreen',
            {
                full: full
            }
        )
    }

    return (
        <FlatList
            style={{ width: '100%', height: '100%' }}
            contentContainerStyle={{ margin: 10 }}
            onEndReached={()=>dispatch(fetchImages(20))}
            data={store.images}
            renderItem={itemData => {
                return (
                    <ImageCard
                        id={itemData.index}
                        image={itemData.item}
                        full={itemData.item.urls.full}
                        navigateToImage={handleNaviagte}
                    />)
            }
            }
        >

        </FlatList>

    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
    },
});

export default MainScreen