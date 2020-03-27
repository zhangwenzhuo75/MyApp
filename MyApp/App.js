import React, {Component} from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Dimensions,
  PixelRatio,
  StatusBar
} from 'react-native';
var ScreenWidth = Dimensions.get('window').width;
var ScreenHeight = Dimensions.get('window').height;

export default class OZCalculator extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.view1}></View>
                <View style={styles.view2}></View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        height: ScreenHeight,
        backgroundColor:'#fff',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    view1: {
        height: ScreenWidth / 2,
        width: ScreenWidth / 1.5,
        backgroundColor: 'red',
        justifyContent: 'space-between',
        borderColor: '#000',
        borderWidth: 3,
    },
    view2: {
        height: ScreenWidth / 1,
        width: ScreenWidth / 1.5,
        marginTop:20,
        backgroundColor: 'green',
        justifyContent: 'space-between',
        borderColor: '#000',
        borderWidth: 3,
    },
});
