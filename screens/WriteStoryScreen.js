import React from 'react';
import { Text, View, Header, TextInput, TouchableOpacity, KeyboardAvoidingView, StyleSheet, Alert } from 'react-native';
import db from '../config';
import firebase from 'firebase';

export default class WriteStoryScreen extends React.Component{
    constructor(){
        super();
        this.state = {
            title: "",
            author: "",
            story: ""
        }
    }

    submitStory =async()=>{
        db.collection('Story_Info').add({
            'story_title': this.state.title,
            'story_author': this.state.author,
            'story_story': this.state.story
        })
    }

    submitAlert(){
        Alert.alert("Story has been submitted")
    }

    render(){
        return(
            <View>
                <TouchableOpacity
                style = {styles.submitButton}
                onPress = {this.submitStory, this.submitAlert}>
                    <Text style = {{justifyContent: 'center', alignSelf: 'center'}}>Submit</Text>
                </TouchableOpacity>
                <Text style = {{marginLeft: 30, marginTop:10}}>Write a story!</Text>
                <KeyboardAvoidingView behavior = "padding" enabled>
                <TextInput style = {{borderWidth: 1.5, width: 300, height: 30, marginLeft: 30, marginTop: 5,}}
                placeholder = {"Story's Title"}
                onChangeText = {(text)=>this.setState({title:text})}/>
                <TextInput style = {{borderWidth: 1.5, width: 300, height: 30, marginLeft: 30, marginTop: 5}}
                placeholder = {"Author"}
                onChangeText = {(text)=>this.setState({author:text})}/>
                <TextInput style = {{borderWidth: 1.5, width: 300, height: 400, marginLeft: 30, marginTop: 5}}
                multiline
                placeholder = {"Story"}
                onChangeText = {(text)=>this.setState({story:text})}/>
                </KeyboardAvoidingView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    submitButton:{
        backgroundColor: 'green',
        alignSelf: 'center',
        alignContent: 'center',
        justifyContent: 'center',
        marginTop: 20,
        width: 100,
        height: 50,
        padding: 10,
        borderRadius: 20
    }
})