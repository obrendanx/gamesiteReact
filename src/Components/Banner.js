import React, { Component } from 'react'
import "react-toggle/style.css" // for ES6 modules
import { View, Text, TouchableHighlight, TouchableOpacity, TextInput, StyleSheet, Image } from 'react-native'

import RDRDUpdate from '../images/rdrdupdate.jpg'
import REACTGaming from '../images/react-gaming.jpeg'
import WARZONE from '../images/warzone.jpg'
import SOLOLVL from '../images/sololvl121.png'

export const imgArr = [
  REACTGaming,
  RDRDUpdate,
  WARZONE,
  SOLOLVL
];

class banner extends Component {
    constructor(props) {
        super(props);
        this.state = {
          counter: 0,
        }
      }

      componentDidMount() {
        this.interval = setInterval(() => {
          this.setState({ counter: this.state.counter + 1 })
          console.log(this.state.counter);
        }, 10000)
      }

      componentWillUnmount() {
        clearInterval(this.interval);
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

        if(this.state.counter > 3){
          this.setState({
            counter: 0
          });
        }

        return (
            <div>
                <View>
                    <Image source = {imgArr[this.state.counter]} 
                        style={{
                            height: "500px",
                            width: "100%",
                            animation: "1s linear forwards ${fadeIn}"
                        }}
                    />
                    <div className="touchFlex">
                      <TouchableHighlight 
                        disabled={button1} 
                        onPress = {(e) => this.changeImage(1)}
                        underlayColor = {'#D32F2F'}
                        style={{
                          position: "absolute",
                          padding: "10px"  
                        }}
                        >
                      <Text>
                          Next
                      </Text>
                      </TouchableHighlight>

                      <TouchableHighlight 
                        disabled={button2} 
                        onPress = {(e) => this.changeImage(2)}
                        underlayColor = {'#D32F2F'}
                        style={{
                          position: "absolute",
                          right: "0",
                          padding: "10px",
                        }}
                        >
                      <Text>
                          Previous
                      </Text>
                      </TouchableHighlight>
                    </div>
                </View>
            </div>
        )
    }
}

export default banner
