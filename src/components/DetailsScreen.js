import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


const DetailsScreen = () => {
    return (
        <View style={styles.container}>
            <Text>Welcome to the Detail Screen!</Text>
        </View>
    );
};

export default DetailsScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    }
});