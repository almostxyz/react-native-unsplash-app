import React from 'react'
import { StyleSheet, View } from 'react-native'

import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import rootReducer from './reducers/rootReducer'



import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import MainScreen from './screens/MainScreen'
import ImageScreen from './screens/ImageScreen'
import { mainColor } from './constants/colors'

const middlewares = [thunk]

const store = createStore(
    rootReducer,
    applyMiddleware(...middlewares)
)

const Stack = createStackNavigator()

export default function App() {
    return (
        <Provider store={store}>
            <View style={styles.container}>
                <NavigationContainer>
                    <Stack.Navigator>
                        <Stack.Screen
                            name='Main'
                            component={MainScreen}
                            options={{
                                headerTitle: 'Unsplash React-Native'
                            }}
                        />
                        <Stack.Screen
                            name='ImageScreen'
                            component={ImageScreen}
                            options={{
                                headerShown: false
                            }}
                        />
                    </Stack.Navigator>
                </NavigationContainer>
            </View>
        </Provider>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

