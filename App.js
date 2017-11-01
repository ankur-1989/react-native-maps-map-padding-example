import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import {
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import React, { Component } from 'react';

export default class App extends Component {
  centerMarker = () => this.mapView.animateToRegion(MARKER_REGION);

  render() {
    return (
      <View style={styles.container}>
        <MapView
          mapPadding={{
            left: 110,
            right: 60,
            top: 60,
            bottom: 60
          }}
          ref={(mapView) => this.mapView = mapView}
          provider={PROVIDER_GOOGLE}
          style={styles.mapView}
        >
          <MapView.Marker coordinate={MARKER_COORDS} />
        </MapView>
        <View style={styles.topView} />
        <View style={styles.middleView} pointerEvents="none">
          <View style={styles.leftView} />
          <View style={styles.rightView} />
        </View>
        <View style={styles.bottomView}>
          <TouchableOpacity onPress={this.centerMarker}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>CENTER MARKER</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const MARKER_COORDS = {
  latitude: 48.51,
  longitude: 2.20
};

const MARKER_REGION = {
  ...MARKER_COORDS,
  latitudeDelta: 1,
  longitudeDelta: 1
};

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  mapView: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0
  },
  topView: {
    backgroundColor: 'green',
    marginLeft: 20,
    marginRight: 20,
    height: 50
  },
  middleView: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 20,
    marginBottom: 20,
    alignItems: 'stretch',
    justifyContent: 'space-between'
  },
  leftView: {
    backgroundColor: 'green',
    width: 100
  },
  rightView: {
    backgroundColor: 'green',
    width: 50
  },
  bottomView: {
    backgroundColor: 'green',
    marginLeft: 20,
    marginRight: 20,
    alignItems: 'center',
    justifyContent: 'center',
    height: 50
  },
  button: {
    padding: 10,
    backgroundColor: 'white',
  },
  buttonText: {
    fontWeight: 'bold'
  }
});
