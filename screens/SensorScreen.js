import React, {Component} from 'react';
import {View, Text, Button} from 'react-native';
import Colors from "../colors/Colors";
import {Accelerometer, Gyroscope, Magnetometer} from 'expo';

class SensorScreen extends Component {

  static navigationOptions = {
    title: 'Sensors',
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

  constructor(props) {
    super(props);
    this.state = {
      accelerometer: null,
      gyroscope: null,
      magnetometer: null,
    };
  }

  componentDidMount() {
    this.accelerometerListener = Accelerometer.addListener(data => this.setState({accelerometer: data}));
    this.gyroListener = Gyroscope.addListener(data => this.setState({gyroscope: data}));
    this.magnetometerListener = Magnetometer.addListener(data => this.setState({magnetometer: data}));
  }

  componentWillUnmount() {
    if (this.accelerometerListener) {
      this.accelerometerListener.remove();
      this.accelerometerListener = null;
    }
    if (this.gyroListener) {
      this.gyroListener.remove();
      this.gyroListener = null;
    }
    if (this.magnetometerListener) {
      this.magnetometerListener.remove();
      this.magnetometerListener = null;
    }
  }

  render() {

    let accelerometerData = null;
    let gyroData = null;
    let magnetoData = null;

    if (this.state.accelerometer) {
      let { x, y, z} = this.state.accelerometer;
      accelerometerData = <Text>x: {x.toFixed(2)} y: {y.toFixed(2)} z: {z.toFixed(2)}</Text>;
    }
    if (this.state.gyroscope) {
      let { x, y, z} = this.state.gyroscope;
      gyroData = <Text>x: {x.toFixed(2)} y: {y.toFixed(2)} z: {z.toFixed(2)}</Text>;
    }
    if (this.state.magnetometer) {
      let { x, y, z} = this.state.magnetometer;
      magnetoData = <Text>x: {x.toFixed(2)} y: {y.toFixed(2)} z: {z.toFixed(2)}</Text>;
    }

    return (
      <View>
        <Text style={{ fontSize: 18, color: Colors.secondary}}>Accéléromètre</Text>
        {accelerometerData}
        <Text style={{ fontSize: 18, color: Colors.secondary}}>Gyroscope</Text>
        {gyroData}
        <Text style={{ fontSize: 18, color: Colors.secondary}}>Magnétomètre</Text>
        {magnetoData}
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
