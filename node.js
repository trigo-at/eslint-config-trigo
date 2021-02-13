module.exports = {
    extends: 'airbnb-base',
    plugins: ['jest', 'filenames'],
    parserOptions: {
        ecmaVersion: 12,
        sourceType: 'module',
    },
    env: {
        node: true,
        es2021: true,
        jest: true,
    },
    rules: {
        strict: [0, 'global'],
        indent: [1, 4, {SwitchCase: 1, VariableDeclarator: 1}],
        'no-tabs': 0,
        'no-plusplus': 0,
        'arrow-body-style': [1, 'as-needed'],
        'arrow-parens': [2, 'as-needed', {requireForBlockBody: true}],
        'no-console': [1, {allow: ['warn']}],
        'max-len': [
            2,
            120,
            2,
            {
                ignoreUrls: true,
                ignoreComments: false,
            },
        ],
        'no-underscore-dangle': [
            'error',
            {
                allow: ['_id', '_index', '_score', '_shards', '_source', '_type', '_state', '_embedded'],
                allowAfterThis: true,
                allowAfterSuper: true,
            },
        ],
        'import/no-extraneous-dependencies': [
            'error',
            {
                devDependencies: true,
                optionalDependencies: false,
                peerDependencies: false,
            },
        ],
        'import/no-namespace': 'error',
        'import/named': 2,
        'no-restricted-syntax': ['error', 'ForInStatement', 'LabeledStatement', 'WithStatement'],
        'no-await-in-loop': 0,
        'no-unused-vars': ['warn', {vars: 'local', args: 'after-used', ignoreRestSiblings: true}],
        'jest/no-disabled-tests': 'error',
        'jest/no-focused-tests': 'error',
        'jest/no-identical-title': 'error',
        'jest/valid-expect': 'error',
        'filenames/match-regex': [2, '^[a-z0-9-.]+$', true],
        'filenames/match-exported': [2, 'kebab'],
    },
};
