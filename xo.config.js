/**
 * @see https://github.com/xojs/xo#config
 * @type {import('xo').FlatXoConfig}
 */
const config = [
	{
		prettier: true,
	},
	{
		// XO hardcodes `tabWidth: 2`; defer to `.prettierrc.js` and `.editorconfig`.
		// Items without `files` only reach JS/TS, so match every linted file.
		files: ['**/*'],
		rules: {
			'prettier/prettier': ['error', {tabWidth: 4}],
		},
	},
	{
		// The npm CLI rewrites `package.json` with two-space indentation.
		files: ['**/package.json'],
		rules: {
			'prettier/prettier': ['error', {useTabs: false, tabWidth: 2}],
		},
	},
	{
		// Preact CLI bundles `src` with webpack 4, which cannot resolve a `.js`
		// specifier to a `.tsx` source. Node never resolves these imports itself.
		files: ['src/**/*.{js,jsx,ts,tsx}'],
		rules: {
			'n/file-extension-in-import': 'off',
		},
	},
	{
		files: ['**/*.{js,jsx,ts,tsx}'],
		rules: {
			'jsdoc/require-asterisk-prefix': ['error', 'always'],
		},
	},
];

export default config;
