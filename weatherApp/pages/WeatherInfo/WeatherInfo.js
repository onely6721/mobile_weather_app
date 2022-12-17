import React, {useEffect} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

const WeatherInfo = ({navigation, route}) => {
  const {data} = route.params;
  return (
    <View>
      <View>
        <Text style={styles.text}>
          {data?.name} {data?.sys.country}
        </Text>
        <Text style={styles.text}>
          Weather: {data?.weather[0]?.main} / {data?.weather[0]?.description}
        </Text>
      </View>
      <View>
        <Text style={styles.title}>Temparature</Text>
        <Text style={styles.text}>Temperature: {data?.main.temp}℃ </Text>
        <Text style={styles.text}>Feels like: {data?.main.feels_like}℃</Text>
        <Text style={styles.text}>Min: {data?.main.temp_min}℃</Text>
        <Text style={styles.text}>Max: {data?.main.temp_max}℃</Text>
      </View>
      <View>
        <Text style={styles.title}>Wind</Text>
        <Text style={styles.text}>Speed: {data?.wind.speed} m/s </Text>
        <Text style={styles.text}>Direction: {data?.wind.deg} deegrees </Text>
        <Text style={styles.text}>Gust: {data?.wind.gust} m/s </Text>
      </View>
      <View>
        <Text style={styles.title}>Cloud</Text>
        <Text style={styles.text}>Cloudiness: {data?.clouds.all}% </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    alignSelf: 'center',
    color: 'green',
  },
  text: {
    color: 'black',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default WeatherInfo;
