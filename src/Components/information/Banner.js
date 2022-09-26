/*
Banner - this component takes a colelction of images and forms them into a small slideshow banner to preview
  - images are stored in an array
  - information about the image is set based on the counter number

  -- text  information needs to be updated to automatically add infomation to certain images
*/ 

import React, { Component } from 'react'
import {BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import "react-toggle/style.css" // for ES6 modules
import { View, Text, TouchableHighlight, ImageBackground } from 'react-native'
import StyleSheet from 'react-native-media-query';

//importing images for the banner slideshow
import BANFour from '../../images/banner/tog.jpg'
import BANOne from '../../images/banner/aot.jpg'
import BANTwo from '../../images/banner/goh.jpg'
import BANThree from '../../images/banner/sololevel.jpg'

//creating the array for the banner images
export const imgArr = [
  BANFour,
  BANOne,
  BANTwo,
  BANThree
];

const page = "/towerofgod"

class banner extends Component {
    constructor(props) {
        super(props);
        //couunter for banner slideshow
        this.state = {
          counter: 0,
        }
      }

      componentDidMount() {
        this.interval = setInterval(() => {
          //updating counter by one every minute
          this.setState({ counter: this.state.counter + 1 })
          console.log(this.state.counter);
        }, 10000)
      }

      componentWillUnmount() {
        clearInterval(this.interval);
      }

      changeImage(button) {
        //check what button is pressed left or right
        if(button === 1) {
          // add one if right is pushed
          if (this.state.counter === imgArr.length - 1) this.setState({counter: 0})
          else this.setState({counter: this.state.counter + 1})
        } else {
          //minus one if left is pushed
          if (this.state.counter === 0) this.setState({counter: imgArr.length - 1})
          else this.setState({counter: this.state.counter - 1}) 
        }
      }

    render() {
        let button1 = false,button2 = false; 
        var imgTitle = "";
        var imgMessage = "";
        if(this.state.counter === 0) {
        //make the previous button disable
        button2=true;
        } 

        if(this.state.counter === (imgArr.length - 1)) {
        button1=true;
        } 

        // if counter becomes greater than amount in banner reset
        if(this.state.counter > 3){
          this.setState({
            counter: 0
          });
        }

        //setting text for each image depending on counter state 
        if(this.state.counter === 0){
          imgTitle = "Tower of God - Season 2";
          imgMessage = "Tower of God centers around a boy named Twenty-Fifth Bam. It is notable that in Korea 'Bam' can mean 'Night' or 'Chestnut'. He has spent most of his life trapped beneath a vast and mysterious Tower, with only his close friend, Rachel, to keep him company. When Rachel enters the Tower, Bam is devastated. Somehow, Bam manages to open the door to the Tower...";
        } else if(this.state.counter === 1){
          imgTitle = "Attack on Titan";
          imgMessage = "The story of Attack on Titan centers on a civilization inside three circular walls. According to the knowledge propagated locally, it is the last surviving vestige of human civilization. Its inhabitants have been led to believe that over one hundred years ago, humanity was driven to the brink of extinction after the emergence of humanoid giants called Titans...";
        } else if(this.state.counter === 2){
          imgTitle = "The God of Highschool";
          imgMessage = "At the dawn of time, humans, demons and gods lived together on Earth. The gods allowed the weak humans to borrow their powers, creating the 'Borrowed Power' system (or 'Charyeok' in Korean) so they could defend themselves from the demons who wanted to rule over them...";
        } else if(this.state.counter === 3){
          imgTitle = "Solo Leveling";
          imgMessage = "In a world where hunters — humans who possess magical abilities — must battle deadly monsters to protect the human race from certain annihilation, a notoriously weak hunter named Sung Jinwoo finds himself in a seemingly endless struggle for survival...";
        }

        const {ids, styles} = StyleSheet.create({
          ban: {
              height: "250px",
              width: "100%",
              animation: "1s linear forwards ${fadeIn}",
              position: "relative",  
              opacity: "0.8",
              '@media (min-width: 770px)': {
                  height: '700px',
                  
              },
          },

          arrowLeftBtn: {
            position: "absolute",
            padding: "10px",
            top: "250px",

            '@media (max-width: 770px)': {
              top: "30%"
          },
          },

          arrowRightBtn: {
            position: "absolute",
            top: "250px",
            right: "0",
            padding: "10px",

            '@media (max-width: 770px)': {
              top: "30%"
          },
          },

          arrowLeftText: {
            //background: "#fff",
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
                    
                    {/*displaying main image for banner*/}
                    <ImageBackground source = {imgArr[this.state.counter]} 
                        style={styles.ban}
                        dataSet={{ media: ids.ban}}
                    >
                      <div className="touchFlex">
                      {/*arrow key left*/}
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
                      {/*arrow key right*/}
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
                            top: "450px",
                            color: "#fff",
                            width: "50%",
                            minHeight: "30%",
                            //background: "rgba(0, 0, 0, 0.3)",
                            marginLeft: "2.5%",
                            marginBottom: "2.5%",
                            padding: "2.5%",
                            background: "rgba(0, 0, 0, 0.6)",
                            borderRadius: "20px"
                          }}
                        >
                          {/* adding text to the banner image */}
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
                            <Link to={page}>Learn More</Link>
                        </Text>
                    </div>
                    </ImageBackground>
                </View>
            </div>
        )

    }
}

export default banner
