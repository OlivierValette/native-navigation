import React, {Component} from 'react';
import { View, Text, Button } from 'react-native';
import Colors from '../colors/Colors';

class HomeScreen extends Component {

  static navigationOptions = {
    title: 'Home',
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

  render() {
    return (
      <View>
        <Text style={{ fontSize: 18, color: Colors.secondary}}>HomeScreen</Text>
        <Button
            title='Sensors'
            color={Colors.primary}
            onPress={() => this.props.navigation.navigate('SensorTab')}
        />
      </View>
    );
  }
}

export default HomeScreen;
