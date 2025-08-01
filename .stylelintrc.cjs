/** @type {import('stylelint').Config} */
module.exports = {
	customSyntax: 'postcss-styled-syntax',
	extends: ['stylelint-config-standard'],
	rules: {
		// Disabled rules due to Styled Components
		'no-invalid-position-declaration': null,
		'nesting-selector-no-missing-scoping-root': null,
	},
};
