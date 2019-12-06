import { TouchableOpacity, TouchableNativeFeedback, Platform } from 'react-native';

export default Platform.select({ android: TouchableNativeFeedback, ios: TouchableOpacity });
