import React, {Component} from 'react';
import { View, Text, Button } from 'react-native';
import Colors from '../colors/Colors';

class HomeScreen extends Component {
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
