module.exports = {
	preset: 'react-native',
	moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
	transformIgnorePatterns: [
		'node_modules/(?!(jest-)?react-native|@react-native|@react-native-community|@react-navigation|ky|react-redux|@gluestack-ui/themed|@legendapp)',
	],
};
