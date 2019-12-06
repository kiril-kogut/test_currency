import React, { useState, useRef } from 'react';
import { View, Text, FlatList, Modal, TouchableWithoutFeedback, ViewPropTypes } from 'react-native';
import PropTypes from 'prop-types';
import localStyles, { baseHeight } from './styles';
import TouchableNativeSpecific from '../TouchableNativeSpecific';

const Dropdown = ({ styles, value, options, placeholder, itemsToDisplay, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [coords, setCoords] = useState({ top: 0, left: 0, width: 0, height: 0 });
  const containerRef = useRef(null);

  const handleOpen = () => {
    containerRef.current.measureInWindow(
      (x, y, containerWidth, containerHeight) => {
        setIsOpen(true);
        setCoords({
          top: y + containerHeight,
          left: x,
          width: containerWidth,
          height: (itemsToDisplay || options.length) * baseHeight,
        });
      },
    );
  };

  const renderPlaceholder = () => <Text style={localStyles.placeholder}>{placeholder}</Text>;
  const renderValue = () => <Text>{value.label}</Text>;

  const renderAccessory = () => (
    <View style={localStyles.accessory}>
      <View style={localStyles.triangleContainer}>
        <View style={localStyles.triangle} />
      </View>
    </View>
  );

  const renderOption = ({ item }) => (
    <TouchableNativeSpecific
      onPress={() => {
        setIsOpen(false);
        onChange(item);
      }}>
      <View style={localStyles.option}>
        <Text>{item.label}</Text>
      </View>
    </TouchableNativeSpecific>
  );

  const renderDropdown = () => (
    <Modal transparent visible={isOpen} onRequestClose={() => setIsOpen(false)}>
      <TouchableWithoutFeedback onPress={() => setIsOpen(false)}>
        <View
          style={localStyles.modalContainer}
          onStartShouldSetResponder={() => true}>
          <FlatList
            data={options}
            renderItem={renderOption}
            keyExtractor={item => item.value}
            style={[localStyles.flatlist, coords]} />
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );

  return (
    <View ref={containerRef} style={[localStyles.container, styles.container]}>
      <TouchableNativeSpecific onPress={handleOpen}>
        <View style={localStyles.input}>
          <View style={localStyles.textContainer}>
            {value ? renderValue() : renderPlaceholder()}
          </View>
          {/* <View style={localStyles.square} /> */}
          {renderAccessory()}
        </View>
      </TouchableNativeSpecific>
      {isOpen && renderDropdown()}
    </View>
  );
};

const OptionType = PropTypes.shape(
  { label: PropTypes.string.isRequired, value: PropTypes.string.isRequired },
);

Dropdown.propTypes = {
  value: OptionType,
  styles: PropTypes.shape({ container: ViewPropTypes.style }),
  options: PropTypes.arrayOf(OptionType),
  itemsToDisplay: PropTypes.number,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
};

Dropdown.defaultProps = {
  styles: {},
  options: [],
  placeholder: '',
  onChange: () => {},
};

export default Dropdown;
