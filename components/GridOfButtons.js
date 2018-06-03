import React, { Component } from 'react';
import { Button, Image, StyleSheet, Text, ScrollView, ImageBackground, TouchableOpacity, View } from 'react-native';
import { Row, Column as Col, ScreenInfo, Grid/*, setBreakPoints*/ } from 'react-native-responsive-grid';

import ButtonView from './ButtonView';
import Constants from '../data/constants';

// column width (relative to screen size)
/*
setBreakPoints({
  SMALL_Width: 600,
  MEDIUM_Width: 800,
  LARGE_Width: 1200
});
*/

const sizes = { sm: 25, md: 25, lg: 25, xl: 25 };

let elements = {};

const hide = (id) => {
  elements[id].hide()
};

const showAll = (e) => {
  Object.keys(elements).forEach((id) => {
    elements[id].show()
  })
};

const Board = (props) => {
  const { button, properties } = props;
  const buttonColor = Constants.colorScheme[button.partOfSpeech];

  return (
    <Col
      ref={(col) => props.elements[props.id] = col}
      smSize={sizes.sm}
      mdSize={sizes.md}
      lgSize={sizes.lg}
      xlSize={sizes.xl} 
      style={{backgroundColor: 'white'}}
    >
      <Row
          smSizePoints={props.state.layout.grid ? props.state.layout.grid.height / 2 : 0}
          mdSizePoints={props.state.layout.grid ? props.state.layout.grid.width / 2 : 0}
          lgSizePoints={props.state.layout.grid ? props.state.layout.grid.width / 3 : 0}
          xlSizePoints={props.state.layout.grid ? props.state.layout.grid.width / 4 : 0}
          alignLines="stretch"
      >
       <Col fullWidth>
         <Row rtl>
           <Col fullWidth offsetPoints={10}>
             <TouchableOpacity onPress={() => {}}>
               <Text style={{fontSize: 22, marginTop: 15}}>

                 <ButtonView
                  button={button}
                  updateDisplayText={properties.updateDisplayText}
                  launchEditButtonModal={properties.launchEditButtonModal}
                  isEditingButton={properties.isEditingButton}
                />

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
    </Col>
  )
};

const layout = (buttons, state, props) => {
  return buttons.map(button => {
    return ([<Board
        button={button}
        state={state}
        properties={props}

        key={button.id}
        id={button.id}
        text={button.text}
        elements={elements}
        hide={hide}
    />])
  })
};

export default class GridOfButtons extends Component {

  render() {
    const { buttons } = this.props;

    return (
      <Grid>{
        ({ state, setState }) => {
          return (
            <Col fullHeight style={{backgroundColor: 'lightgray'}}>
              <ScrollView removeClippedSubviews={true} >
                <TouchableOpacity activeOpacity={1} onPress={(e) => showAll(e)}>
                  <Row>{
                    layout(buttons, state, this.props)
                  }</Row>
                </TouchableOpacity>
              </ScrollView>
            </Col>
          )
        }
      }
     </Grid>
    );
  }
}

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
