import _import from 'eslint-plugin-import';
import prettier from 'eslint-plugin-prettier';
import promise from 'eslint-plugin-promise';
import pluginReact from 'eslint-plugin-react';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import { fixupPluginRules } from '@eslint/compat';
import pluginJs from '@eslint/js';

/** @type {import('eslint').Linter.Config[]} */
export default [
	{
		ignores: [
			'**/gluestack/ui/*',
			'**/*.config.js',
			'**/*.test.*',
			'.prettierrc.js',
		],
	},

	{
		files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
	},
	{
		languageOptions: {
			globals: globals.browser,
		},
	},
	pluginJs.configs.recommended,
	...tseslint.configs.recommended,
	pluginReact.configs.flat.recommended,

	{
		settings: {
			react: {
				version: 'detect',
			},
		},
		plugins: {
			import: fixupPluginRules(_import),
			promise,
			prettier,
		},
		rules: {
			'@typescript-eslint/no-unused-vars': 'error',
			'global-require': 0,
			'react-hooks/exhaustive-deps': 'off',
			quotes: ['error', 'single'],
			'object-curly-spacing': [2, 'always'],
			'array-bracket-spacing': ['error', 'never'],
			'react/require-default-props': ['error'],
			'react/default-props-match-prop-types': ['error'],
			'react/sort-prop-types': ['error'],
			'react/no-array-index-key': 'off',
			'no-tabs': 'off',
			'no-void': 'off',
			'react/jsx-props-no-spreading': 'off',
			'react/display-name': 'off',
			'prettier/prettier': ['error'],

			'react/jsx-filename-extension': [
				'error',
				{
					extensions: ['.jsx', '.tsx'],
				},
			],

			'sonarjs/no-duplicate-string': 0,
			'react/prop-types': 0,
			'@typescript-eslint/member-delimiter-style': 0,
			'@typescript-eslint/no-empty-function': 0,
			'@typescript-eslint/no-explicit-any': 1,
			'import/no-named-as-default': 0,
			'import/no-unresolved': 0,
			'import/extensions': 0,

			'import/order': [
				'error',
				{
					pathGroups: [
						{
							pattern: 'react',
							group: 'external',
							position: 'before',
						},
						{
							pattern: '~/**',
							group: 'parent',
							position: 'before',
						},
						{
							pattern: '@*/**',
							group: 'external',
							position: 'after',
						},
					],

					pathGroupsExcludedImportTypes: ['react'],

					alphabetize: {
						order: 'asc',
						caseInsensitive: true,
					},
				},
			],

			'sort-imports': [
				'error',
				{
					ignoreDeclarationSort: true,
				},
			],

			'jsx-a11y/no-noninteractive-element-interactions': 'off',
			'jsx-a11y/no-static-element-interactions': 'off',
			'jsx-a11y/click-events-have-key-events': 'off',
			'jsx-a11y/no-autofocus': 'off',
			'class-methods-use-this': 0,
			'no-nested-ternary': 0,
			'consistent-return': 0,
			'array-callback-return': 0,
			'no-duplicate-imports': 'error',
			'promise/prefer-await-to-callbacks': 'error',
			'promise/prefer-await-to-then': 'error',
			'react/state-in-constructor': 'off',
			'sonarjs/cognitive-complexity': 'off',
		},
	},
];
