import mockAsyncStorage from '@react-native-community/async-storage/jest/async-storage-mock';

jest.useFakeTimers();
jest.mock('@react-native-community/async-storage', () => mockAsyncStorage);
jest.mock('react-native/Libraries/Animated/src/NativeAnimatedHelper');
