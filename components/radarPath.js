import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';


import {Radar} from 'react-native-pathjs-charts'

let data = [{
    "speed": 74,
    "balance": 29,
    "explosives": 40,
    "energy": 40,
    "flexibility": 30,
    "agility": 25,
    "endurance": 44
  }]
  
let options = {
    width: 290,
    height: 290,
  /*  margin: {
      top: 20,
      left: 20,
      right: 20,
      bottom: 20
    },*/
    r: 130,
    max: 100,
    rings: 4,
    fill: "#2980B9",
    stroke: "#2980B9",
    animate: {
      type: 'oneByOne',
      duration: 200,
      fillTransition: 4,
    },
    label: {
      fontFamily: 'Arial',
      fontSize: 14,
      fontWeight: true,
      fill: '#34495E'
    }
  }
  
export default class RadarPath extends Component{
    render() {
        return (
          <View style={styles.container}>
            <Radar data={data} options={options} />
          </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
  });
  