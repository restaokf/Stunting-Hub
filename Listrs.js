import React, { useState, useEffect } from 'react'
import { View, Text, FlatList, StyleSheet, Button, Alert, Linking, TouchableOpacity } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Header } from 'react-native/Libraries/NewAppScreen';


const Listrs = () => {
    const jsonUrl = 'https://script.google.com/macros/s/AKfycbz1pF6S52C_9ckdUWPGSMRVwakusZBi-TNFNNFxaoE2Ngv6HjBmwIzM4F0shO_guzeE/exec';
    const [isLoading, setLoading] = useState(true);
    const [dataUser, setDataUser] = useState({});
    const [refresh, setRefresh] = useState(false);

    useEffect(() => {
        fetch(jsonUrl)
            .then((response) => response.json())
            .then((json) => {
                console.log(json)
                setDataUser(json)
            })
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
    }
        , []);

    function refreshPage() {
        fetch(jsonUrl)
            .then((response) => response.json())
            .then((json) => {
                console.log(json)
                setDataUser(json)
            })
            .catch((error) => console.error(error))
            .finally(() => setLoading(false));
    }


    return (
        <SafeAreaView>
            {isLoading ? (
                <View>
                    <Text>Loading...</Text>
                </View>
            ) : (
                <View>
                    <Header />
                    <FlatList
                        data={dataUser}
                        onRefresh={() => { refreshPage() }}
                        refreshing={refresh}
                        keyExtractor={({ id }, index) => id}
                        renderItem={({ item }) => (
                            <TouchableOpacity
                                accessibilityRole="button"
                                onPress={() => {
                                    Linking.openURL(
                                        `google.navigation:q=${item.latitude},${item.longitude}`,
                                    );
                                }}
                                style={styles.linkContainer}
                            >
                                <View style={styles.bg}>
                                    <View style={styles.card}>
                                        <View style={styles.avatar}>
                                            <FontAwesome5 name={item.icon} size={50} color={item.color} />
                                        </View>
                                        <View style={{ flex: 1, flexDirection: 'column', marginLeft: 10 }}>
                                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                                <Text
                                                    style={[
                                                        styles.cardtitle,
                                                        { marginBottom: 8, flex: 1, maxWidth: 200 },
                                                    ]}
                                                    numberOfLines={1}
                                                    ellipsizeMode="tail"
                                                >
                                                    {item.name}
                                                </Text>
                                                <FontAwesome5
                                                    name="directions"
                                                    size={20}
                                                    color="#6ab0dd"
                                                />
                                            </View>
                                            <Text style={styles.text}>{item.alamat}</Text>
                                            <Text style={styles.text}>Jenis: {item.jenis}</Text>
                                            <Text style={styles.text}>No: {item.telpon}</Text>
                                            <Text style={styles.text}>email: {item.email}</Text>
                                        </View>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        )}
                    />
                </View>
            )}
        </SafeAreaView>

    )
}

export default Listrs

const styles = StyleSheet.create({
    title: {
        paddingVertical: 12,
        backgroundColor: '#333',
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    bg: {
        backgroundColor: '#0C9390'
    },
    avatar: {
        borderRadius: 100,
        width: 80,
    },
    text: {
        fontSize: 13,
    },
    cardtitle: {
        fontSize: 14,
        fontWeight: 'bold',
    },
    card: {
        flexDirection: 'row',
        padding: 15,
        borderRadius: 10,
        backgroundColor: 'white',
        shadowColor: '#000',
        shadowOffset: {
            width: 1,
            height: 1,
        },
        shadowOpacity: 0.20,
        shadowRadius: 1.41,
        elevation: 2,
        marginHorizontal: 10,
        marginVertical: 7
    },
})