module.exports = {
	preset: 'react-native',
	moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
	transformIgnorePatterns: [
		'node_modules/(?!(jest-)?react-native|@react-native|@react-native-community|@react-navigation|ky|react-redux|@gluestack-ui/themed|@gluestack-ui/config|@legendapp|@expo|@gluestack-ui||expo(nent)?|@expo(nent)?/.*|@expo-google-fonts/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|@gluestack-ui/*|@gluestack-style/*|@legendapp/*|react-native-svg)',
	],
};
