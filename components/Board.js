import React from 'react';
import { Button, Image, StyleSheet, Text, ScrollView, ImageBackground, TouchableOpacity, View } from 'react-native';

import { Row, Column as Col, ScreenInfo, Grid} from 'react-native-responsive-grid'
import ButtonView from './ButtonView';
const data = [
  {
      "id": "0",
      "text": "I",
      "partOfSpeech": "pronoun",
      "type": "core",
      "symbol": "/I/I1_P.bmp",
      "coordinates": {
          "5_8": {
              "x": 1,
              "y": 0
          }
      },
      "boards": ["0"]
  }, {
      "id": "1",
      "text": "Me",
      "partOfSpeech": "pronoun",
      "type": "core",
      "symbol": "/M/me5.bmp",
      "coordinates": {
          "5_8": {
              "x": 2,
              "y": 0
          }
      },
      "boards": ["0"]
  }, {
      "id": "2",
      "text": "My",
      "partOfSpeech": "pronoun",
      "type": "core",
      "symbol": "/M/my2_P.bmp",
      "coordinates": {
          "5_8": {
              "x": 3,
              "y": 0
          }
      },
      "boards": ["0"]
  }, {
      "id": "3",
      "text": "Want",
      "partOfSpeech": "pronoun",
      "type": "core",
      "symbol": "/W/want_P.bmp",
      "coordinates": {
          "5_8": {
              "x": 4,
              "y": 0
          }
      },
      "boards": ["0"]
  }, {
      "id": "4",
      "text": "Him",
      "partOfSpeech": "pronoun",
      "type": "core",
      "symbol": "/H/him2_P.bmp",
      "coordinates": {
          "5_8": {
              "x": 5,
              "y": 0
          }
      },
      "boards": ["0"]
  }, {
      "id": "5",
      "text": "Her",
      "partOfSpeech": "pronoun",
      "type": "core",
      "symbol": "/H/her3_P.bmp",
      "coordinates": {
          "5_8": {
              "x": 1,
              "y": 1
          }
      },
      "boards": ["0"]
  }, {
      "id": "6",
      "text": "She",
      "partOfSpeech": "pronoun",
      "type": "core",
      "symbol": "/S/she1_P.bmp",
      "coordinates": {
          "5_8": {
              "x": 2,
              "y": 1
          }
      },
      "boards": ["0"]
  }, {
      "id": "7",
      "text": "He",
      "partOfSpeech": "pronoun",
      "type": "core",
      "symbol": "/H/he1_P.bmp",
      "coordinates": {
          "5_8": {
              "x": 3,
              "y": 1
          }
      },
      "boards": ["0"]
  }, {
      "id": "8",
      "text": "Like",
      "partOfSpeech": "verb",
      "type": "core",
      "symbol": "/L/like_P.bmp",
      "coordinates": {
          "5_8": {
              "x": 4,
              "y": 1
          }
      },
      "boards": ["0"]
  }, {
      "id": "9",
      "text": "Stop",
      "partOfSpeech": "verb",
      "type": "core",
      "symbol": "/S/stop_P.bmp",
      "coordinates": {
          "5_8": {
              "x": 5,
              "y": 1
          }
      },
      "boards": ["0"]
  }, {
      "id": "10",
      "text": "Come",
      "partOfSpeech": "verb",
      "type": "core",
      "symbol": "/P/come_P.bmp",
      "coordinates": {
          "5_8": {
              "x": 1,
              "y": 2
          }
      },
      "boards": ["0"]
  }, {
      "id": "11",
      "text": "Go",
      "partOfSpeech": "verb",
      "type": "core",
      "symbol": "/G/go_P.bmp",
      "coordinates": {
          "5_8": {
              "x": 2,
              "y": 2
          }
      },
      "boards": ["0"]
  }, {
      "id": "12",
      "text": "Away",
      "partOfSpeech": "adverb",
      "type": "core",
      "symbol": "/A/away2_P.bmp",
      "coordinates": {
          "5_8": {
              "x": 3,
              "y": 2
          }
      },
      "boards": ["0"]
  }, {
      "id": "13",
      "text": "Any",
      "partOfSpeech": "adverb",
      "type": "core",
      "symbol": "/A/any_P.bmp",
      "coordinates": {
          "5_8": {
              "x": 4,
              "y": 2
          }
      },
      "boards": ["0"]
  }, {
      "id": "14",
      "text": "Nothing",
      "partOfSpeech": "noun",
      "type": "core",
      "symbol": "/N/nothing_P.bmp",
      "coordinates": {
          "5_8": {
              "x": 5,
              "y": 2
          }
      },
      "boards": ["0"]
  }, {
      "id": "15",
      "text": "Hello",
      "partOfSpeech": "interjection",
      "type": "core",
      "symbol": "/H/hello_P.bmp",
      "coordinates": {
          "5_8": {
              "x": 1,
              "y": 3
          }
      },
      "boards": ["0"]
  }, {
      "id": "16",
      "text": "Goodbye",
      "partOfSpeech": "interjection",
      "type": "core",
      "symbol": "/G/goodbye_P.bmp",
      "coordinates": {
          "5_8": {
              "x": 2,
              "y": 3
          }
      },
      "boards": ["0"]
  }, {
      "id": "17",
      "text": "Little",
      "partOfSpeech": "adjective",
      "type": "core",
      "symbol": "/L/little_P.bmp",
      "coordinates": {
          "5_8": {
              "x": 3,
              "y": 3
          }
      },
      "boards": ["0"]
  }, {
      "id": "18",
      "text": "Big",
      "partOfSpeech": "adjective",
      "type": "core",
      "symbol": "/B/big_P.bmp",
      "coordinates": {
          "5_8": {
              "x": 4,
              "y": 3
          }
      },
      "boards": ["0"]
  }, {
      "id": "19",
      "text": "Wait",
      "partOfSpeech": "verb",
      "type": "core",
      "symbol": "/W/wait_P.bmp",
      "coordinates": {
          "5_8": {
              "x": 5,
              "y": 3
          }
      },
      "boards": ["0"]
  }, {
      "id": "20",
      "text": "Over",
      "partOfSpeech": "preposition",
      "type": "core",
      "symbol": "/O/over_P.bmp",
      "coordinates": {
          "5_8": {
              "x": 1,
              "y": 4
          }
      },
      "boards": ["0"]
  }, {
      "id": "21",
      "text": "Under",
      "partOfSpeech": "preposition",
      "type": "core",
      "symbol": "/U/under_P.bmp",
      "coordinates": {
          "5_8": {
              "x": 2,
              "y": 4
          }
      },
      "boards": ["0"]
  }, {
      "id": "22",
      "text": "Left",
      "partOfSpeech": "adjective",
      "type": "core",
      "symbol": "/L/left1_P.bmp",
      "coordinates": {
          "5_8": {
              "x": 3,
              "y": 4
          }
      },
      "boards": ["0"]
  }, {
      "id": "23",
      "text": "Right",
      "partOfSpeech": "adjective",
      "type": "core",
      "symbol": "/R/right1a_P.bmp",
      "coordinates": {
          "5_8": {
              "x": 4,
              "y": 4
          }
      },
      "boards": ["0"]
  }, {
      "id": "24",
      "text": "Leave",
      "partOfSpeech": "verb",
      "type": "core",
      "symbol": "/L/leave_P.bmp",
      "coordinates": {
          "5_8": {
              "x": 5,
              "y": 4
          }
      },
      "boards": ["0"]
  },     {
      "id": "25",
      "text": "All",
      "partOfSpeech": "",
      "type": "action",
      "symbol": "/A/all_P.bmp",
      "coordinates": {
          "5_8": {
              "x": 0,
              "y": 0
          }
      },
      "boards": ["0"]
  },
  {
      "id": "26",
      "text": "Food",
      "partOfSpeech": "",
      "type": "action",
      "symbol": "/F/food_P.bmp",
      "coordinates": {
          "5_8": {
              "x": 0,
              "y": 1
          }
      },
      "boards": ["0"]
  },
  {
      "id": "27",
      "text": "Play",
      "partOfSpeech": "",
      "type": "action",
      "symbol": "/P/play_P.bmp",
      "coordinates": {
          "5_8": {
              "x": 0,
              "y": 2
          }
      },
      "boards": ["0"]
  },
  {
      "id": "28",
      "text": "Emotion",
      "partOfSpeech": "",
      "type": "action",
      "symbol": "/F/feel_P.bmp",
      "coordinates": {
          "5_8": {
              "x": 0,
              "y": 3
          }
      },
      "boards": ["0"]
  },
  {
      "id": "29",
      "text": "Things",
      "partOfSpeech": "",
      "type": "action",
      "symbol": "/T/thing_P.bmp",
      "coordinates": {
          "5_8": {
              "x": 0,
              "y": 4
          }
      },
      "boards": ["0"]
  },
]

// column width (relative to screen size)
const sizes = {sm: 25, md: 50, lg: 33.333, xl: 25}  

let elements = {}

const hide = (id) => {
  elements[id].hide()
}

const showAll = (e) => {
  Object.keys(elements).forEach((id) => {
    elements[id].show()
  })
}

const Item = (props) => {
  return (
      <Col ref={(col) => props.elements[props.id] = col} smSize={sizes.sm} mdSize={sizes.md} lgSize={sizes.lg} xlSize={sizes.xl} 
          style={{backgroundColor: colors[props.id]}}>
              <Row 
                  smSizePoints={props.state.layout.grid ? props.state.layout.grid.height / 2 : 0} 
                  mdSizePoints={props.state.layout.grid ? props.state.layout.grid.width / 2 : 0} 
                  lgSizePoints={props.state.layout.grid ? props.state.layout.grid.width / 3 : 0} 
                  xlSizePoints={props.state.layout.grid ? props.state.layout.grid.width / 4 : 0}
                  alignLines="stretch">
               <Col fullWidth> 
                 <Row rtl>
                   <Col fullWidth offsetPoints={10}>
                     <TouchableOpacity onPress={() => { props.hide(props.id)}}>
                       <Text style={{fontSize: 22, marginTop: 15}}>
                         <ButtonView text={props.text}/>
                       </Text>
                     </TouchableOpacity>
                   </Col>
                 </Row>
               </Col>
               <Col fullWidth hAlign='center'> 
                 <Text style={{fontSize: 48, marginTop: 5}}>
                   {props.id}
                 </Text>
               </Col>
           </Row>
         </Col>)}

const layout = (state) => {
  return  data.map((i) => {
      return ([<Item 
          key={i.id}
          id={i.id}
          text={i.text}
          elements={elements}
          hide={hide}
          state={state}
      />])
  })
}

export default class Board extends React.Component {
  
  render() {
      return (
          <Grid>{({state, setState}) => {
              console.log(state)
              return (
                  <Col fullHeight style={{backgroundColor: 'lightgray'}}> 
                      <ScrollView removeClippedSubviews={true} >
                          <TouchableOpacity activeOpacity={1} onPress={(e) => showAll(e)}>
                          <Row>
                              {
                                layout(state)
                              }
                          </Row>
                          </TouchableOpacity>
                  </ScrollView>
                  </Col>)}
            }
         </Grid>
      );
  }
}
const colors = ['lightyellow', 'lightsalmon', 'lightseagreen', 'lightskyblue', 'pink',
                'orange', 'yellow', 'lime', 'lightgreen', 'purple', 'magenta', 'gold']

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'center',
  },
  text: {
      textAlign: 'center',
  },
  image: {
  }
});

