module.exports = {
	'extends': 'airbnb',
	'plugins': [
		'react',
		'jsx-a11y',
		'import',
	],
	'env': {
		'browser': true,
		'commonjs': true,
		'es6': true,
	},
	"rules": {
		// indentation
		"indent": [2, "tab"],
		"no-tabs": 0,

		// spacing
		"template-curly-spacing": [ 2, "always" ],
		"array-bracket-spacing": [ 2, "always" ],
		"object-curly-spacing": [ 2, "always" ],
		"computed-property-spacing": [ 2, "always" ],
		"no-multiple-empty-lines": [ 2, { "max": 1, "maxEOF": 0, "maxBOF": 0 } ],

		// strings
		"quotes": [ 2, "single", "avoid-escape" ],

		// code arrangement matter
		"no-use-before-define": [ 2, { "functions": false } ],

		// make it meaningful
		"prefer-const": 1,

		// keep it simple
		"complexity": [ 1, 5 ],

		// react
		"react/prefer-es6-class": 0,
		"react/jsx-filename-extension": 0,
		"react/jsx-curly-spacing": [ 2, "always" ],
		"react/jsx-indent": [ 2, "tab" ],

		//import
		"import/no-named-default": 0,
	}
};
