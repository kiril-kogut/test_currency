import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 10,
    width: '90%',
  },
  input: {
    flex: 1,
    marginHorizontal: 5,
  },
  inputsContainer: {
    flexDirection: 'row',
  },
  convertedContainer: {
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  convertedText: {
    fontSize: 20,
  },
  convertedCurrency: {
    fontSize: 25,
  },
});
