import { Platform } from 'react-native';

export const IP_ADDRESS = Platform.OS === "android" ? "10.0.2.2" : "localhost";