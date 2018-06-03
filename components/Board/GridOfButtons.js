import React, { Component } from 'react';
import { Text, ScrollView, TouchableOpacity } from 'react-native';
import { Row, Column, ScreenInfo, Grid/*, setBreakPoints*/ } from 'react-native-responsive-grid';

import ButtonView from '../Button/ButtonView';
import Constants from '../../data/constants';

// column width (relative to screen size)
/*
setBreakPoints({
    SMALL_Width: 600,
    MEDIUM_Width: 800,
    LARGE_Width: 1200
});
*/

const sizes = { sm: 20, md: 20, lg: 20, xl: 20 };

let elements = {};

const hide = (id) => {
    elements[id].hide();
};

const showAll = (e) => {
    Object.keys(elements).forEach((id) => {
        elements[id].show();
    });
};

const ButtonContainer = (props) => {
    const { button, properties } = props;
    const buttonColor = Constants.colorScheme[button.partOfSpeech];

    return (
        <Column
            ref={(col) => props.elements[props.id] = col}
            smSize={sizes.sm}
            mdSize={sizes.md}
            lgSize={sizes.lg}
            xlSize={sizes.xl}
            style={{backgroundColor: 'white'}}
        >
            <Row alignLines="stretch" rtl>
                <Column fullWidth offsetPoints={10}>
                    <TouchableOpacity>
                        <ButtonView
                            button={button}
                            updateDisplayText={properties.updateDisplayText}
                            launchEditButtonModal={properties.launchEditButtonModal}
                            filterButtonsByCategory={properties.filterButtonsByCategory}
                        />
                    </TouchableOpacity>
                </Column>
            </Row>
        </Column>
    );
};

const layout = (buttons, state, props) => {
    return buttons.map(button => {
        return (
            <ButtonContainer
                button={button}
                state={state}
                properties={props}

                key={button.id}
                id={button.id}
                text={button.text}
                elements={elements}
            />
        );
    });
};

// scrollable grid with buttons
export default class GridOfButtons extends Component {
    render() {
        const { buttons } = this.props;

        return (
            <Grid>{
                ({ state, setState }) => {
                    return (
                        <Column fullHeight>
                            <ScrollView removeClippedSubviews={true} >
                                <TouchableOpacity activeOpacity={1}>
                                    <Row>{layout(buttons, state, this.props)}</Row>
                                </TouchableOpacity>
                            </ScrollView>
                        </Column>
                    );
                }
            }
            </Grid>
        );
    }
}