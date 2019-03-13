import React, {Component} from 'react';
import { View, Text, Button } from 'react-native';
import Colors from '../colors/Colors';
import { ImagePicker } from 'expo';

class OdoricoScreen extends Component {

  static navigationOptions = {
    title: 'Odorico à Rennes',
    headerStyle: {
      backgroundColor: Colors.alert,
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
      textAlign: 'center',
      flexGrow: 1,
    },
  };

  async handleImagePicker() {
    let result = await ImagePicker.launchImageLibraryAsync();
    if (!result.cancelled) {
      const data = new FormData();
      data.append('picture', {
        uri: result.uri,
        name: 'test.jpg',
        type: 'image/jpg'
      });

      fetch('http://10.26.162.12:3000/api/odorico', {
        method: 'POST',
        body: data
      })
    }
  }

  render() {
    return (
      <View>
        <Text style={{ fontSize: 18, color: Colors.secondary, paddingBottom: 10,}}>Isidore Odorico à Rennes</Text>
        <Button
            title='Choisir une photo'
            color={Colors.primary}
            onPress={() => this.handleImagePicker()}
        />
      </View>
    );
  }
}

export default OdoricoScreen;
