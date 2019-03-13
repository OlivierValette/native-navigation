import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';
import Colors from "../colors/Colors";

class SensorScreen extends Component {
  render() {
    return (
      <View>
        <Text style={{ fontSize: 18, color: Colors.secondary}}>SensorScreen</Text>
        <Button
            title='Home'
            color={Colors.primary}
            onPress={() => this.props.navigation.navigate('HomeTab')}
        />
      </View>
    );
  }
}

export default SensorScreen;
