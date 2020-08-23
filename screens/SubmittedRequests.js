import React, { useState, useEffect } from 'react';
import { ActivityIndicator, FlatList, Button, Alert} from 'react-native';
import { ListItem, Left, Right, Thumbnail, Body, View, Text} from 'native-base';
import * as firebase from 'firebase'
import Firebasekeys from './../config'
import 'firebase/firestore';

// 
const themecolor = '#ff7600'
let pending = true
async function getUrl (imageName) {
    let imageRef = firebase.storage().ref().child("images/" + imageName)
    imageRef
  .getDownloadURL()
  .then((url) => {
    //from url you can fetched the uploaded image easily
    console.log(url)
    return url
  })
  .catch((e) => console.log('getting downloadURL of image error => ', e));
  }
export default function Users() {
  const [loading, setLoading] = useState(true); // Set loading to true on component mount
  const [users, setUsers] = useState([]); // Initial empty array of users
    
  useEffect(() => {
    const subscriber = firebase.firestore()
      .collection('requests')
      .where("uid","==", firebase.auth().currentUser.uid)
      .get()
      .then(querySnapshot => {
        const users = [];
        if(querySnapshot.size > 0)
        {
         pending = false
        }
      querySnapshot.forEach(documentSnapshot => {
        users.push({
          ...documentSnapshot.data(),
          key: documentSnapshot.id,
        });
      });
      console.log(users)
      setUsers(users);
      setLoading(false);
      });

    // Unsubscribe from events when no longer in use
    
  }, []);
  
  if (pending) {
    return <View>
    {/* {
          this.state.refreshing && (<View style={{ flex: 1, paddingTop: 20 }}>
            <ActivityIndicator />
          </View>)} */}
     
    {/* <ActivityIndicator animating={this.state.isLoading}/> */}
    <Text style={{marginTop: 15, color: '#ff0000', fontWeight: 'bold', alignSelf: 'center'}}>No Requests Found</Text>
  </View>;
  }
  return (
    <FlatList
      data={users}
      renderItem={({ item }) => (
        <ListItem thumbnail >
                
                <Body>
                    <Text numberOfLines={2} style={{fontSize: 20}}>{item.title}</Text>
                    <Text></Text>
                    <Text note>Type: {item.type}</Text>
                    <Text note >Credits Recieved: {item.redemption}</Text>
                    <Text note>Date: {item.date}     Time: {item.time}</Text>

                </Body>
                <Right>
                    {/* <Button transparent onPress={this.getUserComplaintsHandler} >
                    <Text>View</Text>
                    </Button> */}
                <Text>{item.status}</Text>
                    </Right>
                </ListItem>
      )}
      keyExtractor={item => item.key}
      showsVerticalScrollIndicator={false}
    />
  );

  // ...
}