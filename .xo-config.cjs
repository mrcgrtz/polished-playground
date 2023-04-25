/** @type {import('xo').Options} */
module.exports = {
	prettier: true,
	extends: 'xo-preact',
	rules: {
		'react/jsx-filename-extension': [
			'error',
			{extensions: ['.ts', '.tsx']},
		],
		'import/extensions': [
			'error',
			'ignorePackages',
			{
				ts: 'never',
				tsx: 'never',
			},
		],
	},
};
