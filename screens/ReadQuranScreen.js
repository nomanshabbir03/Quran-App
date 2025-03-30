import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { useState } from 'react';
const ayahData = require('./ayah.json');

const ReadQuranScreen = () => {
    const [data, setData] = useState(ayahData);

    return (
        <View style={styles.container}>
            <FlatList
                data={data}
                renderItem={({ item }) => <Item item={item} />}
                keyExtractor={item => item.Id.toString()}
            />
        </View>
    );
};

const Item = ({ item }) => {
    return (
        <View style={styles.itemContainer}>
            <View style={styles.rowContainer}>
                <View style={styles.translation}>
                    <Text style={styles.translationText}>{item.Translation}</Text>
                </View>
                <View style={styles.arabic}>
                    <Text style={styles.arabicText}>{item.AyahTextMuhammadi}</Text>
                </View>
            </View>
            <View style={styles.divider}>
                <Text style={styles.dividerText}>
                    پارہ {item.ParahNumber} سورة رکوع {item.SurahNumber}
                </Text>
            </View>
            <View style={styles.tafseerContainer}>
                <Text style={styles.tafseerText}>{item.Tafseer}</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#333', // Light black background
        padding: 10,
    },
    itemContainer: {
        marginBottom: 15,
        borderWidth: 1,
        borderColor: '#555', // Darker border
        borderRadius: 8,
        padding: 10,
        backgroundColor: '#444', // Lighter black background for items
    },
    rowContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    translation: {
        flex: 0.5,
        justifyContent: 'center',
        alignItems: 'flex-start',
        padding: 10,
    },
    arabic: {
        flex: 0.5,
        justifyContent: 'center',
        alignItems: 'flex-end',
        padding: 10,
    },
    divider: {
        backgroundColor: '#666', // Dark gray divider
        padding: 5,
        alignItems: 'center',
        marginVertical: 5,
    },
    tafseerContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
    },
    translationText: {
        color: '#fff', // White text
        fontSize: 16,
        textAlign: 'left', 
    },
    arabicText: {
        color: '#fff',
        fontSize: 18, 
        textAlign: 'right', 
        fontFamily: 'Amiri', 
    },
    dividerText: {
        color: '#fff', // White text
        fontSize: 14,
    },
    tafseerText: {
        color: '#ccc', 
        fontSize: 14,
        textAlign: 'center',
    },
});

export default ReadQuranScreen;

