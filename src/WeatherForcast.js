import React, { Component } from 'react';
import {
  View,
  Button,
  StyleSheet,
  Text,
  TextInput,
  ScrollView,
} from 'react-native'

const styles = StyleSheet.create({
    weather: {
        flexDirection: 'row'
    }

})

export default class WeatherForcast extends Component {
  constructor(props) {
      super(props)

      this.state = {
        zipcode: ''
      }

  }

  displayWeather() {
      let month = (new Date()).getUTCMonth() + 1
      let weatherElements = []
      console.log(`month: ${month}`)
      if (this.props.weatherData != undefined) {
          console.log(this.props.weatherData)
           this.props.weatherData.forEach((val, key) => {
               console.log(val, key)
                weatherElements.push(
                    <View key={key} style={styles.weather}>
                        <Text>Date: {month} / {key}</Text>
                        <Text>Temp: {val}</Text>
                    </View>
                )
           })
           console.log(weatherElements)
           return weatherElements
      }
  }

  render() {
      return (
          <View>
              <Text>Zip Code:</Text>
              <TextInput
                    onChangeText={(zipcode) => this.setState({zipcode})}
                    value={this.state.zipcode}
                    keyboardType='numeric'
                    maxLength={6}
                />
                <Button
                    title="Get Weather Data"
                    onPress={() => this.props.getWeatherData(this.state.zipcode)}
                />
                <ScrollView>
                    {this.displayWeather()}
                </ScrollView>
          </View>
      )
  }

}
