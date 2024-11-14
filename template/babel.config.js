module.exports = {
	presets: ['module:@react-native/babel-preset', "nativewind/babel"],
	plugins: [
		[
			'module-resolver',
			{
				root: ['.', "./"],
				extensions: ['.ios.js', '.android.js', '.js', '.json', ".ts", ".tsx", ".jsx"],
				alias: {
                    src: './src',
                    '~wrappers': './utils/wrappers',
                    "@": "./"
                },
			},
		],
	],
};

// module.exports = {
// 	presets: ['module:metro-react-native-babel-preset'],
// 	plugins: [
// 	  [
// 		'module-resolver',
// 		{
// 		  root: ['./src'],
// 		  extensions: ['.ios.js', '.android.js', '.js', '.json'],
// 		},
// 	  ],
// 	  ['babel-plugin-root-import', { rootPathSuffix: 'src' }],
// 	  ['@babel/plugin-proposal-decorators', { legacy: true }],
// 	],
//   };
