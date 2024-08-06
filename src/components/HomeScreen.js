import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import axios from 'axios';

const API_KEY = "tG526xrhc95aiyfAXnZY03RcaV2fti8BBymc2_1-8Vg";
const baseURL = "https://api.unsplash.com/";

const axiosInstance = axios.create({
    method: 'get',
    baseURL,
    headers: {
        Authorization: `Client-ID ${API_KEY}`
    }
});

const HomeScreen = () => {
    const [data, setData] = useState([]);

    const fetchRandomPicture = async () => {
        try {
            const response = await axiosInstance.get('photos/random');
            setData(response.data);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    useEffect(() => {
        fetchRandomPicture();
    }, []);

    console.log(data);

    return (
        <View style={styles.container}>
            <View style={styles.card}>
                {data.urls && <Image style={styles.image} resizeMode='resize' source={{ uri: data.urls.small }} />}
            </View>
        </View>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    card: {
        width: '80%',
        padding: 20,
        backgroundColor: '#fff',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 2,
        elevation: 1,
    },
    image: {
        width: '100%',
        height: 500,
        borderRadius: 8,
    },
});
