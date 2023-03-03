import React, { useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Context } from '../context/BlogContext';
import EvilIcons from 'react-native-vector-icons/EvilIcons'


const ShowScreen = ({ navigation }) => {
    const { state } = useContext(Context)

    const blogPost = state.find((blogPost) => blogPost.id === navigation.getParam('id'))
    return (
        <View style={styles.container}>
            <View style={styles.textWrapper}>
                <Text style={styles.titleText}>{blogPost.title}</Text>
                <Text style={styles.contentText}>{blogPost.content}</Text>
            </View>
        </View>
    )
}

ShowScreen.navigationOptions = ({ navigation }) => {
    return {
        headerRight: () => (
            <TouchableOpacity onPress={() => navigation.navigate('Edit', { id: navigation.getParam('id') })}>
                <EvilIcons name='pencil' size={34} style={{ right: 5 }} />
            </TouchableOpacity>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
        flexDirection: 'column',       
    },
    textWrapper: {
        margin: 15
    },
    titleText: {
        fontSize: 24,
        fontWeight: 'bold',
        alignSelf: 'center',
        padding: 10
    },
    contentText: {
        fontSize: 16,
        letterSpacing: 0.5,
        fontWeight: '300'
    }
})


export default ShowScreen;