# eslint-config-trigo

## install

`yarn add -D @trigo/eslint-config-trigo`

## usage

```
{
	"extends": "@trigo/eslint-config-trigo"
}
```

### settings, plugins and rules

```
module.exports = {
	extends: 'airbnb-base',
	plugins: [
		'mocha',
	],
	env: {
		node: true,
		mocha: true,
	},
	rules: {
		strict: [0, 'global'],
		indent: [1, 'tab', { SwitchCase: 1, VariableDeclarator: 1 }],
		'no-tabs': 0,
		'no-plusplus': 0,
		'arrow-body-style': [2, 'as-needed', { requireReturnForObjectLiteral: true }],
		'arrow-parens': [2, 'as-needed', { requireForBlockBody: true }],
		'no-console': [1, { allow: ['warn'] }],
		'max-len': [2, 160, 2, {
			ignoreUrls: true,
			ignoreComments: false,
		}],
		'no-underscore-dangle': ['error', { allow: ['_id'] }],
		'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
		'import/named': 2,
		'mocha/no-exclusive-tests': 'error',
	},
};

```
