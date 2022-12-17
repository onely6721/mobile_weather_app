import {Button, StyleSheet, Text, View} from 'react-native';
import axios from 'axios';
import {useEffect, useState} from 'react';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';

const WEATHER_TOKEN = '7462d8c9be87219cc4a60d9af735dca5';
const API_URL = 'https://api.openweathermap.org/data/2.5/';

export default function SelectPlace({navigation}) {
  const getWeatherData = async (lat, lng) => {
    return await axios.get(
      `${API_URL}weather?lat=${lat}&lon=${lng}&appid=${WEATHER_TOKEN}&units=metric`,
    );
  };

  const [markerPosition, setMarkerPosition] = useState({
    latitude: 28.57966,
    longitude: 77.32111,
  });

  const onPress = async () => {
    const result = await getWeatherData(
      markerPosition.latitude,
      markerPosition.longitude,
    );
    navigation.push('WeatherInfo', {data: result.data});
  };

  return (
    <View style={styles.container}>
      <MapView
        showsUserLocation={false}
        zoomEnabled={true}
        zoomControlEnabled={true}
        initialRegion={{
          latitude: 28.57966,
          longitude: 77.32111,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        onPress={e => setMarkerPosition(e?.nativeEvent.coordinate)}>
        <Marker coordinate={markerPosition} />
      </MapView>
      <Button onPress={onPress} title="Get weather info" color="#841584" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: '100%',
    height: '90%',
  },
});
