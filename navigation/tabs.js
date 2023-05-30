import { View, Image, Text } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Accueil from '../ecrans/Accueil'
import Chat from '../ecrans/Chat'
import Parametres from '../ecrans/Parametres'
import Post from '../ecrans/Post'
import Recherche from '../ecrans/Recherche'

import Styles from './style';
import React from 'react';

const Tab = createBottomTabNavigator();

const Tabs = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarStyle: {
                    backgroundColor: 'white',
                    position: 'absolute',
                    bottom: 25,
                    // padding: 10
                    left: 20,
                    right: 20,
                    height: 90,
                    borderRadius: 15,
                    shadowColor: 'orange',
                    shadowOffset: {
                        height: 0,
                        width: 0,
                    },
                    shadowOpacity: 0.25,
                    shadowRadius: 20,
                    elevation: 10,

                },
                tabBarActiveTintColor: 'orange',
                tabBarInactiveTintColor: 'gray',
                // tabBarLabelStyle: { fontSize: 16 },
                tabBarLabelStyle: { display: 'none' },
            })}
        >
            <Tab.Screen name="Accueil" component={Accueil}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (<View style={{ alignItems: 'center', justifyContent: 'center' }}>
                            <Image
                                source={require('../assets/icons/accueil.png')}
                                resizeMode='contain'
                                style={{
                                    height: 25,
                                    width: 25,
                                    tintColor: focused ? "orange" : "gray"
                                }}
                            />
                            <Text style={{ color: focused ? "orange" : "gray", fontSize: 12 }}>ACCUEIL</Text>
                        </View>)
                    }
                }}
            />


            <Tab.Screen name="Recherche" component={Recherche}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (<View style={{ alignItems: 'center', justifyContent: 'center' }}>
                            <Image
                                source={require('../assets/icons/plus.png')}
                                resizeMode='contain'
                                style={{
                                    height: 70,
                                    width: 70,
                                    position: 'absolute',
                                    top: -50,
                                    shadowColor: 'red',
                                    shadowOffset: {
                                        height: 0,
                                        width: 0,
                                    },
                                    shadowOpacity: 0.25,
                                    shadowRadius: 20,
                                    elevation: 10,


                                    // tintColor : "orange"
                                }}
                            />
                        </View>
                        )
                    }
                }}
            />


            <Tab.Screen name="Parametres" component={Parametres}
                options={{
                    tabBarIcon: ({ focused }) => {
                        return (
                            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                <Image
                                    source={require('../assets/icons/reglages.png')}
                                    resizeMode='contain'
                                    style={{
                                        height: 25,
                                        width: 25,
                                        tintColor: focused ? "orange" : "gray"
                                    }}
                                />

                                <Text style={{ color: focused ? "orange" : "gray", fontSize: 12 }}>REGLAGES</Text>
                            </View>
                        )
                    }
                }}
            />

            {/* <Tab.Screen name="Post" component={Post} /> */}
            {/* <Tab.Screen name="Chat" component={Chat} /> */}
        </Tab.Navigator>
    );
}

export default Tabs;