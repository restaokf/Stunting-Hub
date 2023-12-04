import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { Text, View, StyleSheet} from 'react-native';
import Fontawesome5 from 'react-native-vector-icons/FontAwesome5';
import { WebView } from 'react-native-webview';
import Listrs from '../Listrs';



const Tab = createBottomTabNavigator();

// Form input dari github
const forminput = 'https://restaokf.github.io/formdanpetastunting/';

// Peta web dari github
const webmap = 'https://restaokf.github.io/formdanpetastunting/map.html';


function MapScreen() {
    return (
        <WebView
            source={{uri: webmap}}
        />

    );
}

function AddDataScreen() {
    return (
        <WebView
            source={{uri: forminput}}
        />

    );
}

function ListScreen() {
    return (
        <View>
            <Listrs/>
        </View>

    );
}



function MyTabs() {
    return (
            <Tab.Navigator screenOptions={{ headerShown: false }} >
                <Tab.Screen name="Map" component={MapScreen}
                    options={{
                        tabBarLabel: 'Map',
                        tabBarIcon: ({ color, size }) => (
                            <Fontawesome5 name="map" color={color} size={size} />
                        ),
                    }}
                />
                <Tab.Screen name="Add Data" component={AddDataScreen}
                    options={{
                        tabBarLabel: 'Add Data',
                        tabBarIcon: ({ color, size }) => (
                            <Fontawesome5 name="plus-circle" color={color} size={size} />
                        ),
                    }}
                />
                <Tab.Screen name="List RS" component={ListScreen}
                    options={{
                        tabBarLabel: 'List RS',
                        tabBarIcon: ({ color, size }) => (
                            <Fontawesome5 name="home" color={color} size={size} />
                        ),
                    }}
                />
            </Tab.Navigator>

    );
}

export default MyTabs;

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 200,
        resizeMode: 'stretch'
    },
    listitems: {
        padding: 10,
        alignItems: 'center'
    },
    caption: {
        fontSize: 14,
        fontWeight: 'bold'
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 10,
    },
    container: {
        marginTop:20, 
        marginHorizontal: 20,
        padding: 20,
        backgroundColor: '#fff'
    }
})

