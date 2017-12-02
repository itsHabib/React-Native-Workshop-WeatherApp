import React, { Component } from 'react';
import {
  View,
  Button,
  StyleSheet,
  Text,
} from 'react-native'
import axios from 'axios'
import WeatherForcast from './WeatherForcast'

const WEATHER_API_ENDPOINT = 'https://api.openweathermap.org/data/2.5/forecast?'
const WEATHER_API_KEY = '0e1c3cba78434415a1875d318f184c14'


const styles = StyleSheet.create({

})

export default class App extends Component {
  constructor(props) {
      super(props)

      this.state = {
          weatherData: []
      }

  }

  async getWeatherData(zipCode) {
      console.log(`grabWeatherData`)
      let weatherData
      if (zipCode.length != 0) {
        try {
            let response = await axios.get(`${WEATHER_API_ENDPOINT}`+
            `zip=${zipCode}&units=imperial&APPID=${WEATHER_API_KEY}`)
            weatherData = this.filterWeatherData(response.data)
            console.log(weatherData)
            this.setState({ weatherData })

        } catch(err) {
            console.log(err)
        }
    }

  }

  filterWeatherData(weatherData) {
      let filteredData = new Map()
      weatherData.list.forEach((data) => {
          let date = new Date()
          date.setUTCSeconds(data.dt)
          if (!filteredData.has(date.getUTCDate() - 1)) {
              filteredData.set(date.getUTCDate() - 1, data.main.temp)
          }
      })
      return filteredData
  }

  render() {
    return (
        <View>
            <WeatherForcast 
                weatherData={this.state.weatherData}
                getWeatherData={this.getWeatherData.bind(this)}
            />
        </View>
    )
  }
}
