import React, { Component } from 'react'
import "react-toggle/style.css" // for ES6 modules
import { View, Text, TouchableHighlight, TouchableOpacity, TextInput, Image, ImageBackground } from 'react-native'
import StyleSheet from 'react-native-media-query';

import RDRDUpdate from '../images/rdrdupdate.jpg'
import REACTGaming from '../images/react-gaming.jpeg'
import WARZONE from '../images/warzone.jpg'
import SOLOLVL from '../images/sololvl121.png'
import BANOne from '../images/banone.jpg'
import BANTwo from '../images/bantwo.webp'
import BANThree from '../images/banthree.jpg'


export const imgArr = [
  REACTGaming,
  BANOne,
  BANTwo,
  BANThree
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
          imgTitle = "Banner Image";
          imgMessage = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in maximus sapien. Duis eget pulvinar massa, quis varius libero. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam sit amet libero vitae metus placerat efficitur. Curabitur nec molestie sem";
        } else if(this.state.counter == 2){
          imgTitle = "Banner Image";
          imgMessage = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in maximus sapien. Duis eget pulvinar massa, quis varius libero. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam sit amet libero vitae metus placerat efficitur. Curabitur nec molestie sem";
        } else if(this.state.counter == 3){
          imgTitle = "Banner Image";
          imgMessage = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in maximus sapien. Duis eget pulvinar massa, quis varius libero. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam sit amet libero vitae metus placerat efficitur. Curabitur nec molestie sem";
        }

        const {ids, styles} = StyleSheet.create({
          ban: {
              height: "700px",
              width: "100%",
              animation: "1s linear forwards ${fadeIn}",
              position: "relative",  

              '@media (max-width: 770px)': {
                  height: '250px'
              },
          },

          arrowLeftBtn: {
            position: "absolute",
            padding: "10px",
            top: "37.5%",

            '@media (max-width: 770px)': {
              top: "10%"
          },
          },

          arrowRightBtn: {
            position: "absolute",
            top: "37.5%",
            right: "0",
            padding: "10px",

            '@media (max-width: 770px)': {
              top: "10%"
          },
          },

          arrowLeftText: {
            //background: "#fff",
            color: "#000",
            //opacity: "0.3",
            padding: "15px",
            fontSize: "4em",
            color: "#fff",

            '@media (max-width: 770px)': {
              fontSize: "1.5em"
            },
          },

          arrowRightText: {
            //background: "#fff",
            color: "#000",
            //opacity: "0.3",
            padding: "15px",
            fontSize: "4em",
            color: "#fff",

            '@media (max-width: 770px)': {
              fontSize: "1.5em"
            },
          },
      })

        return (
            <div>
                <View>
                    <ImageBackground source = {imgArr[this.state.counter]} 
                        style={styles.ban}
                        dataSet={{ media: ids.ban}}
                    >
                      <div className="touchFlex">
                    <TouchableHighlight 
                        disabled={button2} 
                        onPress = {(e) => this.changeImage(2)}
                        underlayColor = {''}
                        style={styles.arrowLeftBtn}
                        dataSet={{ media: ids.arrowLeftBtn}}
                        >
                      <Text
                        style={styles.arrowLeftText}
                        dataSet={{ media: ids.arrowLeftText}}
                      >
                          &lt;
                      </Text>
                      </TouchableHighlight>

                      <TouchableHighlight 
                        disabled={button1} 
                        onPress = {(e) => this.changeImage(1)}
                        underlayColor = {''}
                        style={styles.arrowRightBtn}
                        dataSet={{ media: ids.arrowRightBtn}}
                        >
                      <Text 
                        style={styles.arrowRightText}
                        dataSet={{ media: ids.arrowRightText}}
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
                            width: "50%",
                            minHeight: "30%",
                            //background: "rgba(0, 0, 0, 0.3)",
                            marginLeft: "2.5%",
                            marginBottom: "2.5%",
                            padding: "2.5%"
                          }}
                        >
                            <header>
                              <h1
                                style={{
                                  marginBottom: "5px",
                                }}
                              >{imgTitle}</h1>
                            </header>
                            <p>
                              {imgMessage}
                            </p>
                            <a href="#">Learn More</a>
                        </Text>
                    </div>
                    </ImageBackground>
                </View>
            </div>
        )

    }
}

export default banner
