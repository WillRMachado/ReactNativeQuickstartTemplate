module.exports = {
	preset: 'react-native',
	transformIgnorePatterns: [
		'node_modules/(?!(jest-)?react-native|@react-native|@react-native-community|@react-navigation|ky|react-redux|@gluestack-ui/themed|@gluestack-ui/config|@legendapp|@expo|@gluestack-ui)',
	],
	transform: {
		'^.+\\.(js|jsx|ts|tsx|mjs)$': 'babel-jest',
	},
};
