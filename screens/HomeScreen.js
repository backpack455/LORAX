import React, { useState, useEffect } from 'react';
import {View, Text, StyleSheet, Platform, Alert, ActivityIndicator, StatusBar, Dimensions, Image, ScrollView} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import {WebView} from 'react-native-webview'
import * as firebase from 'firebase'
import Firebasekeys from './../config'
import 'firebase/firestore';



const coursescatalog = 'https://classpert.com'
const screenWidth = Dimensions.get('window').width
let pendingrequests = 0
const acceptedrequests = 0
const currentUser = "Om"
let totalrequests = 0
const themecolor = '#000'
const tabcolor = '#ff7600'
let currentUserpoints = '0';
let firebaseConfig = Firebasekeys


if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
firebase.auth().onAuthStateChanged(user => {

    const db = firebase.firestore().collection('users')
    if(user){
        firebase.firestore()
        .collection('users')
        // Filter results
        .where('uid', '==', `${user.uid}`)
        .get()
        .then(querySnapshot => {
            console.log('User exists: ', querySnapshot.size);
            if(querySnapshot.empty){

            db.add({
                uid: user.uid,
                email: user.email,
                points: 0,
                name: user.displayName,
                // requestedComplaints: 0,
                // pendingComplaints: 0,
                // complaintsSubmitted: 0,
            })
            
            }
            if (querySnapshot.exists) {
              console.log('User data: ', querySnapshot.data());
            }
        }
        
        );
        firebase.firestore()
        .collection('users')
        .where('uid', '==', user.uid)
        .onSnapshot(querySnapshot => {
            const item =  querySnapshot.docs.map(doc => {
                currentUserpoints = doc.data().points
                console.log('hello', doc.data().points)  
            })
        })
        firebase.firestore()
        .collection('complaints')
        // Filter results
        .get()
        .then(querySnapshot => {
            const item =  querySnapshot.docs.map(doc => {
                if(!querySnapshot.empty)
                console.log('THis many complaints', querySnapshot.size);
                pendingrequests =  1
                totalrequests = 1
            })
        })
    }
})

firebase.firestore()

export default class HomeScreen extends React.Component{
    constructor(props) {
        super(props)

        this.state = {
            isLoaded: false,
            displayName: "",
        }
    }
    componentDidMount(){
        const {displayName} = firebase.auth().currentUser

        this.setState({displayName})
    }
    signOutUser = () => {
        firebase.auth().signOut()
        firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
                console.log('user is still signed in!!')
            } else {
                console.log('user is logged out!!')
            }
          });
    }
    render(){
        return(
        <View style={styles.welcomer}><StatusBar barStyle="light-content"/>
            <Text style={{fontWeight: "700", fontSize: 30, paddingBottom: 10}}>Welcome {this.state.displayName}</Text>
            <View
            style={{
                borderTopWidth: 6,
                borderTopColor: `${tabcolor}`,
                borderRadius: 3,
                width: 280,
                paddingBottom: 30, 
            }}
            />
            <View style={{flexDirection: 'row'}}>
                <TouchableOpacity style={styles.coupon} onPress={() => 
                this.props.navigation.navigate('Prizes')}>
                    <Image style={styles.image}source={require('./../assets/reward.png')}/>
                    <Text></Text>
                    <Text style={styles.title}>Choose Rewards </Text>
                </TouchableOpacity>
                
                <TouchableOpacity style={styles.coupon} onPress={() => 
                this.props.navigation.navigate('Submitted Requests')} >
                    <Image style={styles.image}source={require('./../assets/view.png')}/>
                    <Text style={styles.title}>View Request(s)</Text>
                </TouchableOpacity>
            </View>
            <View style={{flexDirection: 'row'}}>
                <TouchableOpacity style={styles.coupon} onPress={() => 
                this.props.navigation.navigate('Rewards Form')} >
                    <Image style={styles.image}source={require('./../assets/request12.png')}/>
                    <Text style={styles.title}>Request Rewards</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.coupon} onPress={() => 
                this.props.navigation.navigate('Savings')} >
                    <Image style={styles.image}source={require('./../assets/PB.png')}/>
                    <Text style={styles.title}>Potential Savings</Text>
                </TouchableOpacity>
            </View>
            <View style={{flexDirection: 'row'}}>
                <TouchableOpacity style={styles.coupon} onPress={() => 
                this.props.navigation.navigate('Footprint')} >
                    <Image style={styles.image}source={require('./../assets/calculator.png')}/>
                    <Text style={styles.title}>Footprint Calculator</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.coupon} onPress={this.signOutUser}>
                <Image style={styles.image}source={require('./../assets/signout.png')}/>
                    <Text style={styles.title}>
                        Sign Out
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
        )
    }
}

const styles = StyleSheet.create({
    welcomer: {
        flex: 1,
        paddingTop: 20,
        backgroundColor: '#fff',
        alignItems: 'center'
    },

    image: {
        width: 40,
        height: 40,
    },
    coupon: {
        alignItems: "center",
        width: (175),
        margin: 8,
        borderRadius: 20,
        paddingVertical: 20,
        paddingHorizontal: 24,
        shadowRadius: 10,
        backgroundColor: '#fff',
        shadowOpacity: 0.1,
        flexDirection: 'row'
    },
    title: {
        fontSize: 18, color: `${themecolor}`, fontWeight: "600", paddingLeft:10
    }
})