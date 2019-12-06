import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import styles from './styles';
import Input from '../../components/Input';
import Dropdown from '../../components/Dropdown';
import fixxerApi from '../../services/fixxer.io';

const options = [
  { label: 'Denmark', value: 'DKK' },
  { label: 'India', value: 'INR' },
  { label: 'US', value: 'USD' },
  { label: 'Thailand', value: 'THB' },
];

const Main = () => {
  const [euro, setEuro] = useState('');
  const [currency, setCurrency] = useState(null);
  const [converted, setConverted] = useState(null);

  const handleConvert = () => {
    fixxerApi.convert('EUR', currency.value, Number(euro.replace(',', '.')))
      .then(setConverted)
      .catch(err => console.log('[ERROR] Main handleConvert', err));
  };

  const handleCurrencyChange = newValue => {
    setConverted(null);
    setCurrency(newValue);
  };

  const handleEuroChange = newValue => {
    setConverted(null);
    setEuro(newValue);
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.inputsContainer}>
          <Input
            leftLabel="€"
            styles={{ container: styles.input }}
            value={euro}
            keyboardType="numeric"
            onChangeText={handleEuroChange} />
          <Dropdown options={options} placeholder="country" styles={{ container: styles.input }} value={currency} onChange={handleCurrencyChange} />
        </View>
        <View style={styles.convertedContainer}>
          {Boolean(converted) && (
            <Text style={styles.convertedText}>
              {converted}
            </Text>
          )}
        </View>
        <Button title="convert" disabled={!(euro && currency)} onPress={handleConvert} />
      </View>
    </View>
  );
};

export default Main;
