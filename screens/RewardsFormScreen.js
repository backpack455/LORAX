import React, { Component,} from 'react';
import {Label, Container, Header, Content, Form, Item, Input, Button, Left, Textarea} from 'native-base';
import {Text, Icon, Dimensions, Image, View, StatusBar} from 'react-native'
import { StyleSheet, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';

import * as Permissions from 'expo-permissions';
import * as firebase from 'firebase'
import Firebasekeys from '../config'
import 'firebase/firestore';

const themecolor = '#fff'
const tabcolor = '#ff7600'
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
let pictureURL = ''
let currentUserpoints = '1,000';
let firebaseConfig = Firebasekeys
console.disableYellowBox =true;

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default class FormExample extends Component {
  state = {
    photo: null, 
    submissionStatus: false,
    date: "",
    location: "",
    time: "",
    cost: "",
    title: "",
    extradetails: "",
    type: "",
    details: "",
    uid: "",
    pictureurl: "0"
  };
  componentDidMount() {
    this.getPermissionAsync();
  }
  getPermissionAsync = async () => {
    if (true) {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL);
      if (status !== 'granted') {
        Alert.alert('Sorry, we need camera roll permissions!');
      }
    }
  };
  handleChoosePhoto = async () => {
    try {
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });
      if (!result.cancelled) {
        this.setState({ photo: result.uri });
        this.uploadImage(result.uri, this.state.title)
        .then(() => {
          console.log('sucess')
        })
        .catch((error) => {
          Alert.alert(error)
        })
      }

      console.log(result);
    } catch (E) {
      console.log(E);
    }
  };
  uploadImage = async (uri, imageName) => {
    const response  = await fetch(uri)
    const blob = await response.blob()

    let ref = firebase.storage().ref().child("images/" + imageName)
    return ref.put(blob)
  }
  submissionHandler = async uri => {
      console.log(this.state)
        const path = `photos/${this.title}/${Date.now()}.jpg`
        this.retrieveImageUrl(this.state.title)
        .then(
        firebase.firestore()
        .collection('requests')
        .add({
            date: this.state.date,
            location: this.state.location,
            time: this.state.time,
            cost: this.state.cost,
            title: this.state.title,
            extradetails: this.state.extradetails,
            type: this.state.type,
            details: this.state.details,
            uid: firebase.auth().currentUser.uid,
            pictureurl: pictureURL,
            status: 'Pending',
            redemption: 'N/a'
        }))
        
        console.log(pictureURL)
    setTimeout(() => {
        this.props.navigation.goBack()
    })
  }

  retrieveImageUrl = async (imageName) => {
    let imageRef = firebase.storage().ref().child("images/" + imageName)
    imageRef
    .getDownloadURL()
    .then((url) => {
      console.log('started retrieving')
      this.setState({pictureurl: 'url'})
      pictureURL = url
      console.log(url)
      this.onChanceImageURl(url)
      console.log(url)
    })
    .catch((e) => console.log('getting downloadURL of image error => ', e));
    return console.log(this.state.pictureurl)
  }
  onChanceImageURl = (url) => {
    console.log('about to set state')
    this.setState({
      pictureurl: url
    })
  }
  onChangeTextBrand = (text) => {
    this.setState({
      brand: text,
    })
  }
  onChangeTextExtra = (text) => {
    this.setState({
      extra: text,
    })
  }
  onChangeTextCost = (text) => {
    this.setState({
      cost: text,
    })
  }
  onChangeTextTime = (text) => {
    this.setState({
      time: text,
    })
  }
  onChangeTextDate = (text) => {
    this.setState({
      date: text,
    })
  }
  onChangeTextDetails = (text) => {
    this.setState({
      details: text,
    })
  }
  onChangeTextType = (text) => {
    this.setState({
      type: text,
    })
  }
  onChangeTextExtraDetails = (text) => {
    this.setState({
      extradetails: text,
    })
  }
  onChangeTextTitle = (text) => {
    this.setState({
      title: text,
    })
  }
  onChangeTextStore = (text) => {
    this.setState({
      location: text,
    })
  }
  render() {
    const {photo, submissionStatus} = this.state

    return (
      <Container>
        <Content>
            <StatusBar barStyle="light-content"/>
        <Text style={{fontSize: 16, paddingLeft: 10, marginBottom: 10, paddingTop: 20}}>Complaint Form:   </Text>
        <View
            style={{
                borderTopWidth: 6,
                borderTopColor: `${tabcolor}`,
                borderRadius: 3,
                width: 140,
                marginBottom: 10
            }}
            />
          <Form>
            <Item stackedLabel>
              <Label>Name of Item</Label>
              <Input style={FormStyles.formInput} onChangeText={this.onChangeTextTitle}/>
            </Item>
            <Item stackedLabel>
              <Label>Type of Item</Label>
              <Input style={FormStyles.formInput} onChangeText={this.onChangeTextType}/>
            </Item>
            <Item stackedLabel>
              <Label>Brand of Item</Label>
              <Input style={FormStyles.formInput} onChangeText={this.onChangeTextBrand}/>
            </Item>
            <Item stackedLabel>
              <Label>Cost of Item</Label>
              <Input style={FormStyles.formInput} onChangeText={this.onChangeTextCost}/>
            </Item>
            <Item stackedLabel>
              <Label>Location of Store</Label>
              <Input style={FormStyles.formInput} onChangeText={this.onChangeTextStore}/>
            </Item>
            <Item stackedLabel>
              <Label>Confirmation Details</Label>
              <Input style={FormStyles.formInput} onChangeText={this.onChangeTextDetails}/>
            </Item>
            <Item stackedLabel>
              <Label>Date Purchased</Label>
              <Input style={FormStyles.formInput} onChangeText={this.onChangeTextDate}/>
            </Item>
            <Item stackedLabel>
              <Label>Time Purchased</Label>
              <Input style={FormStyles.formInput} onChangeText={this.onChangeTextTime}/>
            </Item>
            <Content padder stackedLabel>
              <Form>
                <Textarea rowSpan={3} placeholder="Any other details that would help us hasten the process and confirm the purchase to give you back credits" style={FormStyles.formInput} onChangeText={this.onChangeTextExtraDetails} />
                <Item></Item>
              </Form>
            </Content>
            <Item stackedLabel>
              <Label>Pictures</Label>
              <Text></Text>
              <Button style={{backgroundColor: '#fff', alignSelf: "stretch"}} small onPress={this.handleChoosePhoto}>
                <Text style={{color: '#0000EE', textAlign: 'center'}}>Image of Proof</Text>
              </Button>
              {
                photo && (
                  <Image
                  source={{ uri: this.state.photo }}
                  style={{width: 50, height: 50}}
                  />
                )}
            </Item>
            <Button style={{backgroundColor: `${tabcolor}`, alignSelf: "stretch", flex: 1}} onPress={this.submissionHandler}>
              <Text style={{color: `${themecolor}`, textAlign: 'center', paddingLeft: 200}}>Submit</Text>
              </Button>
              {
              submissionStatus && (<Text style={FormStyles.success}>
                Submitted!
              </Text>)}
          </Form>
        </Content>
      </Container>
    );
  }
}

const FormStyles = StyleSheet.create({
  formInput: {
    padding: 10,

  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bold: {
    color: '#000'
  },
  success: {
    color: '#4bb543'
  },
  loadingContainer: {
    marginTop: 80,
    justifyContent: 'center'
  },
  text: {
    color: '#ffffff',
    fontSize: 16
  },
  loadingModelContainer: {
    flexDirection: 'row',
    marginTop: 10
  },
  imageWrapper: {
    width: 280,
    height: 280,
    padding: 10,
    borderColor: '#cf667f',
    borderWidth: 5,
    borderStyle: 'dashed',
    marginTop: 40,
    marginBottom: 10,
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center'
  },
  imageContainer: {
    width: 250,
    height: 250,
    position: 'absolute',
    top: 10,
    left: 10,
    bottom: 10,
    right: 10
  },
  predictionWrapper: {
    height: 100,
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center'
  },
  transparentText: {
    color: '#ffffff',
    opacity: 0.7
  },
  footer: {
    marginTop: 40
  },
  poweredBy: {
    fontSize: 20,
    color: '#e69e34',
    marginBottom: 6
  },
  tfLogo: {
    width: 125,
    height: 70
  }
})