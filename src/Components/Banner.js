import React, { Component } from 'react'
import "react-toggle/style.css" // for ES6 modules
import { View, Text, TouchableHighlight, TouchableOpacity, TextInput, StyleSheet, Image, ImageBackground } from 'react-native'

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
        var imgTitle = "";
        var imgMessage = "";
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

        if(this.state.counter == 0){
          imgTitle = "React Gaming";
          imgMessage = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in maximus sapien. Duis eget pulvinar massa, quis varius libero. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam sit amet libero vitae metus placerat efficitur. Curabitur nec molestie sem";
        } else if(this.state.counter == 1){
          imgTitle = "Read Dead Redemption 2";
          imgMessage = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in maximus sapien. Duis eget pulvinar massa, quis varius libero. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam sit amet libero vitae metus placerat efficitur. Curabitur nec molestie sem";
        } else if(this.state.counter == 2){
          imgTitle = "Warzone";
          imgMessage = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in maximus sapien. Duis eget pulvinar massa, quis varius libero. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam sit amet libero vitae metus placerat efficitur. Curabitur nec molestie sem";
        } else if(this.state.counter == 3){
          imgTitle = "Solo Leveling";
          imgMessage = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in maximus sapien. Duis eget pulvinar massa, quis varius libero. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam sit amet libero vitae metus placerat efficitur. Curabitur nec molestie sem";
        }

        return (
            <div>
                <View>
                    <ImageBackground source = {imgArr[this.state.counter]} 
                        style={{
                            height: "700px",
                            width: "100%",
                            animation: "1s linear forwards ${fadeIn}",
                            position: "relative",
                        }}
                    >
                      <div className="touchFlex">
                    <TouchableHighlight 
                        disabled={button2} 
                        onPress = {(e) => this.changeImage(2)}
                        underlayColor = {''}
                        style={{
                          position: "absolute",
                          padding: "10px",
                        }}
                        >
                      <Text
                        style={{
                          background: "#fff",
                          color: "#000",
                          opacity: "0.7",
                          padding: "10px"
                        }}
                      >
                          &lt;
                      </Text>
                      </TouchableHighlight>

                      <TouchableHighlight 
                        disabled={button1} 
                        onPress = {(e) => this.changeImage(1)}
                        underlayColor = {''}
                        style={{
                          position: "absolute",
                          right: "0",
                          padding: "10px",
                        }}
                        >
                      <Text 
                        style={{
                          background: "#fff",
                          color: "#000",
                          opacity: "0.7",
                          padding: "10px"
                        }}
                      >
                          &gt;
                      </Text>
                      </TouchableHighlight>
                    </div>

                    <div className="imageInfo">
                        <Text
                          style={{
                            position: "absolute",
                            bottom: "0",
                            color: "#fff",
                            height: "150px",
                            width: "50%",
                            background: "rgba(0, 0, 0, 0.5)",
                            margin: "0, 0, 10%, 10%",
                          }}
                        >
                            <header>
                              <h1>{imgTitle}</h1>
                            </header>
                            <p>
                              {imgMessage}
                            </p>
                        </Text>
                    </div>
                    </ImageBackground>
                </View>
            </div>
        )
    }
}

export default banner
