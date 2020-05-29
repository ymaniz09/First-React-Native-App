import React from 'react';
import {Text} from 'react-native';
import Default from "../styles/Default";

export default function (props) {
    return <Text style={Default.example}>{props.text}</Text>
}