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
		'no-underscore-dangle': ['error', {
			allow: [
				'_id',
				'_index',
				'_score',
				'_shards',
				'_source',
				'_type',
				'_state',
			],
			allowAfterThis: true,
			allowAfterSuper: true }],
		'import/no-extraneous-dependencies': ['warn', { devDependencies: true }],
		'import/named': 2,
		'mocha/no-exclusive-tests': 'error',
		'no-restricted-syntax': [
			'error',
			'ForInStatement',
			'LabeledStatement',
			'WithStatement',
		],
		'no-await-in-loop': 0,
		'no-unused-vars': ['warn', { vars: 'local', args: 'after-used', ignoreRestSiblings: true }],
	},
};
