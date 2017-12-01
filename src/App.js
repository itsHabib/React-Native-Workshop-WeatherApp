/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  View,
  Button,
  StyleSheet,
  Text,
} from 'react-native'
import axios from 'axios'

const WEATHER_API_ENDPOINT = 'https://api.openweathermap.org/data/2.5/forecast?'
const WEATHER_API_KEY = '0e1c3cba78434415a1875d318f184c14'


const styles = StyleSheet.create({

})

export default class App extends Component {
  constructor(props) {
      super(props)

      this.state = {
          weatherData: {}
      }

  }

  async grabWeatherData() {
      console.log(`grabWeatherData`)
      let weatherData
      try {
        let response = await axios.get(`${WEATHER_API_ENDPOINT}`+
        `zip=91326&metric=imperial&APPID=${WEATHER_API_KEY}`)
        weatherData = response.data
        console.log(weatherData)
        this.setState({ weatherData })

      } catch(err) {
        console.log(err)
      }

  }

  render() {
    return (
        <View>
            <Button
                title="Grab Weather Data"
                onPress={this.grabWeatherData.bind(this)}
            />
        </View>
    )
  }
}
