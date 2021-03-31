import React, { Component } from 'react'
import "react-toggle/style.css" // for ES6 modules
import { View, Text, TouchableHighlight, TouchableOpacity, TextInput, StyleSheet, Image } from 'react-native'

import RDRDUpdate from '../images/rdrdupdate.jpg'
import REACTGaming from '../images/react-gaming.jpeg'
import WARZONE from '../images/warzone.jpg'
import SOLOLVL from '../images/sololvl121.png'

var imgArr = [{RDRDUpdate}, {REACTGaming}, {SOLOLVL}, {WARZONE}]

class banner extends Component {
    constructor(props) {
        super(props);
        this.state = {
          counter: 0,
        }
      }

      changeImage(button) {
        if(button == 1) {
          if (this.state.counter == imgArr.length - 1) this.setState({counter: 0})
          else this.setState({counter: this.state.counter + 1})
        } else {
          if (this.state.counter == 0) this.setState({counter: imgArr.length - 1})
          else this.setState({counter: this.state.counter - 1}) 
        }
      }

    render() {
        let button1 = false,button2 = false; 
        if(this.state.counter == 0) {
        //make the previous button disable
        button2=true;
        } 

        if(this.state.counter == (imgArr.length - 1)) {
        button1=true;
        } 

        return (
            <div>
                <View>
                    <Image source = {SOLOLVL} 
                        style={{
                            height: "500px",
                            width: "100%"
                        }}
                    />
                    <TouchableHighlight disabled={button1} onPress = {(param) => this.toggle(param)}>
                    <Text>
                        Next
                    </Text>
                    </TouchableHighlight>

                    <TouchableHighlight disabled={button2} onPress = {(param) => this.toggle(param)}>
                    <Text>
                        Previous
                    </Text>
                    </TouchableHighlight>
                </View>
            </div>
        )
    }
}

export default banner
