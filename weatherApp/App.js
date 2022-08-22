import React, { useCallback, useEffect, useState } from 'react';
import { Text, View, TextInput, ImageBackground, ActivityIndicator, Image } from 'react-native';
import axios from 'axios';
import styles from './App.style';

const App = () => {
  const [input, setInput] = useState('');
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [getir, setGetir] = useState(false);

  const api = {
    key: '486a7dceff36934a00e8daaa99a9630e',
    baseUrl: 'http://api.openweathermap.org/data/2.5/',
  };
  const fetchDataHandler = useCallback(() => {
    setLoading(true);
    setInput('');
    axios({
      method: 'GET',
      url: `https://api.openweathermap.org/data/2.5/weather?q=${input}&units=metric&appid=${api.key}`,
    })
      .then(res => {
        setGetir(true);
        console.log(res.data);
        setData(res.data);
      })
      .catch(err => {
        console.dir(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [input, api.key]);

  return (
    <View style={styles.root}>
      <ImageBackground
        source={require('./assets/bg3.jpg')}
        resizeMode="cover"
        style={styles.image}>
        <View>
          <Text style={styles.header}>WeatherApp</Text>
          <TextInput
            placeholder="Enter city name.."
            style={styles.textInput}
            onChangeText={text => setInput(text)}
            placeholderTextColor={'#000'}
            onSubmitEditing={fetchDataHandler}
            value={input}
          />
        </View>
        {loading && (
          <View>
            <ActivityIndicator size={'large'} color={'#fff'} />
          </View>
        )}
        {getir && (
          <View style={styles.infoView}>
            <Image style={{ height: 120, width: 120 }} resizeMode="cover" source={{ uri: 'https://openweathermap.org/img/w/' + `${data?.weather?.[0].icon}` + '.png' }} />
            <Text style={styles.cityCountryText}>{`${data?.name}`}</Text>
            <View style={{ flexDirection: 'row' }}>
              <Text style={styles.tempText}>{`${Math.round(data?.main?.temp,)} °C`}</Text>
              <Text style={styles.weathers}>{`${data?.weather?.[0].main}`}</Text>
            </View>
            <Text style={styles.minMaxText}>{`Min ${Math.round(data?.main?.temp_min,)} °C / Max ${Math.round(data?.main?.temp_max)} °C`}</Text>
            <Text style={styles.dateText}>{new Date().toLocaleString()}</Text>
          </View>
        )}
      </ImageBackground>
    </View>
  );
};

export default App;
