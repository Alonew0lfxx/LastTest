import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import PropTypes from 'prop-types';

export default class MyButton extends Component {
    render() {
        const {text,background} = this.props;
        return (
            <View>
                <View style={[styles.buttonBg,{backgroundColor:background}]}>
                    <Text style={styles.textInformation}>{text}</Text>
                </View>
            </View>
        );
    }
}

MyButton.propTypes = {
    text: PropTypes.string.isRequired,
    background: PropTypes.string.isRequired
}

const styles = StyleSheet.create({
    textInformation: {
        fontSize: 18,
        color: '#fff',
        margin: 10,
    },

    buttonBg: {
        alignSelf: 'center',
        margin: 15,
        borderWidth: 1.5,
        borderColor: '#000',
    },
});
