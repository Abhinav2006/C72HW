import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class ReadStoryScreen extends React.Component{
    render(){
        return(
            <Text style = {styles.text}>
                Coming Soon!
            </Text>
        )
    }
}

const styles = StyleSheet.create({
    text:{
        fontWeight: 'bold',
        fontSize: 30,
        alignSelf: 'center',
        justifyContent: 'center',
        marginTop: 200,
        padding: 10,
    }
})