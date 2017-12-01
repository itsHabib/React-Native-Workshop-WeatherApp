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
} from 'react-native';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    buttonRow: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 10,
    }
})

export default class App extends Component {
  constructor(props) {
      super(props)

      this.state = {
          textElements: [],
      }

  }

  displayTextElements() {
      if (this.state.textElements.length != 0) {
          return this.state.textElements.map((textElement, i) =>
              <View>
                  <Text>Text: {i + 1}</Text>
              </View>
        )
      }
  }

  addTextElement() {
      let length = this.state.textElements.length
      let textElements = this.state.textElements
      textElements.push(`Text: ${length + 1}`)
      this.setState({ textElements })
  }

  render() {
    return (
        <View style={styles.container}>
            <View style={styles.buttonRow}>
                <Button
                    title="Hello World"
                />
                <Button
                    title="Hello World 2!"
                />
            </View>
                <Button
                    title="Press me!!!"
                    onPress={this.addTextElement.bind(this)}
                />
            <View>
                {this.displayTextElements()}
            </View>
        </View>
    )
  }
}
