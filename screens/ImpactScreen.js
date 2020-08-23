import React from 'react'
import {View, Text, StyleSheet, Platform, Alert, ActivityIndicator} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import {WebView} from 'react-native-webview'

const ImpactWebsite = 'https://www.footprintcalculator.org/food1'

export default class ProjectionScreen extends React.Component{
    constructor(props) {
        super(props)

        this.state = {
            isLoaded: false,
        }
    }
    render(){
        return(
            <WebView source={{ uri: ImpactWebsite }} />
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})