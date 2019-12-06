import React from 'react';
import { View, Text, TextInput, ViewPropTypes } from 'react-native';
import PropTypes from 'prop-types';
import localStyles from './styles';

const Input = ({ styles, leftLabel, ...restProps }) => (
  <View style={[localStyles.container, styles.container]}>
    {Boolean(leftLabel) && <Text style={localStyles.label}>{leftLabel}</Text>}
    <TextInput style={[localStyles.input, styles.input]} {...restProps} />
  </View>
);

Input.propTypes = {
  value: PropTypes.string,
  styles: PropTypes.shape({ container: ViewPropTypes.style, input: ViewPropTypes.style }),
  leftLabel: PropTypes.string,
};

Input.defaultProps = {
  styles: {},
};

export default Input;
