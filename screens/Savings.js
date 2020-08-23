import React from 'react'
import {View, Text, StyleSheet, Platform, Alert, ActivityIndicator, Dimensions, Image,} from 'react-native'
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler'
import {WebView} from 'react-native-webview'
import * as firebase from 'firebase'
import * as WebBrowser from 'expo-web-browser'
import Firebasekeys from './../config'
import 'firebase/firestore';

const employmentprojections = 'https://www.bls.gov/emp/'

const themecolor = '#fff'
const tabcolor = '#ff7600'
const screenWidth = Dimensions.get('window').width

export default class PrizeScreen extends React.Component{
    constructor(props) {
        super(props)

        this.state = {
            isLoaded: false,
        }
    }
    render(){
        return(
            <ScrollView style={styles.container}>
                <View style={{padding: 30, alignItems: "center"}}>
                    <Text style={{fontWeight: "900", fontSize: 48 }}>Over $10000+</Text>
                    <Text style={{padding: 10}}> in Savings Avaliable</Text>
                </View>
                <View style={{flexDirection: "row", justifyContent: "center", paddingLeft: 10, paddingRight: 10}}>
                    <TouchableOpacity style={styles.coupon} onPress={() => 
                        this.props.navigation.navigate('')} >
                            <Text>DRINKING WATER</Text>
                            <Text></Text>
                            <Image style={styles.image}source={require('../assets/water1.png')} />
                            <View style={{flexDirection: 'row'}}>
                                {/* <Ionicons name="ios-people" size={30} color="#fff" style={{paddingRight: 5}}/> */}
                                <Text></Text>
                                <View style={{flexDirection: 'row'}}>
                                    <Text style={{fontSize: 18, fontWeight: "500"}}> $4380 off</Text>
                                </View>
                            </View>

                            <Text style={{color: 'grey', paddingTop: 5, fontSize: 10}}>
                                    per year
                            </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.coupon} onPress={() => 
                        WebBrowser.openBrowserAsync('https://rideshare.org/question/how-much-will-i-save-by-carpooling/')} >
                            <Text>TRANSPORTATION</Text>
                            <Text></Text>
                            <Image style={styles.image}source={require('../assets/car.png')} />
                            <View style={{flexDirection: 'row'}}>
                                {/* <Ionicons name="ios-people" size={30} color="#fff" style={{paddingRight: 5}}/> */}
                                <Text></Text>
                                <View style={{flexDirection: 'row'}}>
                                    <Text style={{fontSize: 18, fontWeight: "500"}}> $1500+ off</Text>
                                </View>
                            </View>

                            <Text style={{color: 'grey', paddingTop: 5, fontSize: 10}}>
                                    per year
                            </Text>
                    </TouchableOpacity>
                </View>
                <View style={{flexDirection: "row", justifyContent: "center", paddingLeft: 10, paddingRight: 10}}>
                    <TouchableOpacity style={styles.coupon} onPress={() => 
                        WebBrowser.openBrowserAsync('https://ecobnb.com/blog/2017/08/reduce-water-consumption/')} >
                            <Text>TAP WATER</Text>
                            <Text></Text>
                            <Image style={styles.image}source={require('../assets/TW.jpg')} />
                            <View style={{flexDirection: 'row'}}>
                                {/* <Ionicons name="ios-people" size={30} color="#fff" style={{paddingRight: 5}}/> */}
                                <Text></Text>
                                <View style={{flexDirection: 'row'}}>
                                    <Text style={{fontSize: 18, fontWeight: "500"}}> $800+ off</Text>
                                </View>
                            </View>

                            <Text style={{color: 'grey', paddingTop: 5, fontSize: 10}}>
                                    per year
                            </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.coupon} onPress={() => 
                        WebBrowser.openBrowserAsync('https://www.respectfood.com/article/how-much-money-you-can-save-by-reducing-food-waste/')} >
                            <Text>FOOD</Text>
                            <Text></Text>
                            <Image style={styles.image}source={require('../assets/food.jpg')} />
                            <View style={{flexDirection: 'row'}}>
                                {/* <Ionicons name="ios-people" size={30} color="#fff" style={{paddingRight: 5}}/> */}
                                <Text></Text>
                                <View style={{flexDirection: 'row'}}>
                                    <Text style={{fontSize: 18, fontWeight: "500"}}> $864 off</Text>
                                </View>
                            </View>

                            <Text style={{color: 'grey', paddingTop: 5, fontSize: 10}}>
                                    per year
                            </Text>
                    </TouchableOpacity>
                </View>
                <View style={{flexDirection: "row", justifyContent: "center", paddingLeft: 10, paddingRight: 10}}>
                    <TouchableOpacity style={styles.coupon} onPress={() => 
                        WebBrowser.openBrowserAsync('https://www.gobanking.com/unplug-appliances-save-electricity-bill-2-2-3-2/')} >
                            <Text>ELECTRONICS</Text>
                            <Text></Text>
                            <Image style={styles.image}source={require('../assets/ele.jpg')} />
                            <View style={{flexDirection: 'row'}}>
                                {/* <Ionicons name="ios-people" size={30} color="#fff" style={{paddingRight: 5}}/> */}
                                <Text></Text>
                                <View style={{flexDirection: 'row'}}>
                                    <Text style={{fontSize: 18, fontWeight: "500"}}> $200+ off</Text>
                                </View>
                            </View>

                            <Text style={{color: 'grey', paddingTop: 5, fontSize: 10}}>
                                per year
                            </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.coupon} onPress={() => 
                        WebBrowser.openBrowserAsync('https://www.capitalone.com/bank/money-management/car/do-electric-cars-save-money/')} >
                            <Text>EV vs GASOLINE</Text>
                            <Text></Text>
                            <Image style={styles.image}source={require('../assets/EV.jpg')} />
                            <View style={{flexDirection: 'row'}}>
                                {/* <Ionicons name="ios-people" size={30} color="#fff" style={{paddingRight: 5}}/> */}
                                <Text></Text>
                                <View style={{flexDirection: 'row'}}>
                                    <Text style={{fontSize: 18, fontWeight: "500"}}> $624 off</Text>
                                </View>
                            </View>

                            <Text style={{color: 'grey', paddingTop: 5, fontSize: 10}}>
                                    per year
                            </Text>
                    </TouchableOpacity>
                </View>
                <View style={{flexDirection: "row", justifyContent: "center", paddingLeft: 10, paddingRight: 10}}>
                    <TouchableOpacity style={styles.coupon} onPress={() => 
                        WebBrowser.openBrowserAsync('http://www.energizecharlottesville.org/showerbetter/')} >
                            <Text>SHOWERS</Text>
                            <Text></Text>
                            <Image style={styles.image}source={require('../assets/shower.jpg')} />
                            <View style={{flexDirection: 'row'}}>
                                {/* <Ionicons name="ios-people" size={30} color="#fff" style={{paddingRight: 5}}/> */}
                                <Text></Text>
                                <View style={{flexDirection: 'row'}}>
                                    <Text style={{fontSize: 18, fontWeight: "500"}}> $100+ off</Text>
                                </View>
                            </View>

                            <Text style={{color: 'grey', paddingTop: 5, fontSize: 10}}>
                                    per year
                            </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.coupon} onPress={() => 
                        WebBrowser.openBrowserAsync('https://www.moneytalksnews.com/14-things-you-should-almost-always-buy-used/')} >
                            <Text>BUY USED</Text>
                            <Text></Text>
                            <Image style={styles.image}source={require('../assets/used.jpg')} />
                            <View style={{flexDirection: 'row'}}>
                                {/* <Ionicons name="ios-people" size={30} color="#fff" style={{paddingRight: 5}}/> */}
                                <Text></Text>
                                <View style={{flexDirection: 'row'}}>
                                    <Text style={{fontSize: 18, fontWeight: "500"}}> $15,000 off</Text>
                                </View>
                            </View>

                            <Text style={{color: 'grey', paddingTop: 5, fontSize: 10}}>
                                    per year
                            </Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    coupon: {
        alignItems: "center",
        width: (175),
        margin: 8,
        borderRadius: 20,
        paddingVertical: 20,
        paddingHorizontal: 24,
        shadowRadius: 10,
        shadowColor: "grey",
        backgroundColor: '#fff',
        shadowOpacity: 0.1,
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 15,
        backgroundColor: '#fff'
    }
})